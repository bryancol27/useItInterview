import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

// Import Rxjs operators
import { take, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

// Import services
import { UserStateService } from '@services/user-state/user-state.service';
import { UsersAuthService } from '@services/user-auth/users-auth.service';
import { UiStateService } from '@services/ui-state/ui-state.service';

// Import interfaces
import { apiResponseIbase } from '@interfaces/user.interface';

@Component({
	selector: 'app-details-user',
	templateUrl: './details-user.component.html',
	styleUrls: ['./details-user.component.scss'],
})
export class DetailsUserComponent implements OnInit, OnDestroy {
	// Destroy suscription
	private componentDestroyed = new Subject<void>();

	// CurrentUser
	currentUser!: apiResponseIbase;

	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private userStateService: UserStateService,
		private usersAuthService: UsersAuthService,
		private uiStateService: UiStateService,
	) {}

	ngOnInit(): void {
		// *ID search by url params "id"
		this.route.paramMap.pipe(take(1)).subscribe((params) => {
			const dynamic = params.get('id');

			if (typeof dynamic == 'string') {
				// Loading state
				this.uiStateService.sharingObservableData = {
					...this.uiStateService.sharingObservableValue,
					loading: true,
				};

				// *Search ID at the database
				this.usersAuthService
					.getUserById(dynamic)
					.pipe(take(1))
					.subscribe(
						(res) => {
							if (res.length == 1) {
								this.currentUser = res[0];
								this.uiStateService.sharingObservableData = {
									...this.uiStateService
										.sharingObservableValue,
									loading: false,
								};

								return;
							} else {
								this.uiStateService.sharingObservableData = {
									error: true,
									errorProblem: 'No matches',
									loading: false,
								};
								this.router.navigate(['/users']);
							}
						},
						// If exist an error
						(error) => {
							this.uiStateService.sharingObservableData = {
								error: true,
								errorProblem:
									'We have internal problems, try again later',
								loading: false,
							};
							this.router.navigate(['/users']);
						},
					);

				return;
			}
		});

		this.userStateService.sharingObservableObserver
			.pipe(takeUntil(this.componentDestroyed))
			.subscribe((res) => {
				if (!res) {
					this.router.navigate(['/']);
				}
			});
	}

	ngOnDestroy(): void {
		this.componentDestroyed.next();
		this.componentDestroyed.complete();
	}
}
