import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

// Import interfaces
import { apiRequestI } from '@interfaces/user.interface';

// Import services
import { UsersAuthService } from '@services/user-auth/users-auth.service';
import { UserStateService } from '@services/user-state/user-state.service';
import { UiStateService } from '@services/ui-state/ui-state.service';

// Operators rxjs
import { take } from 'rxjs/operators';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
	// NG MODEL STRUCT:
	user: apiRequestI = {
		username: '',
		password: '',
	};

	// Destroy suscription
	private componentDestroyed = new Subject<void>();

	constructor(
		private usersAuthService: UsersAuthService,
		private userStateService: UserStateService,
		private uiStateService: UiStateService,
		private router: Router,
	) {
		userStateService.sharingObservableObserver
			.pipe(takeUntil(this.componentDestroyed))
			.subscribe((R) => {
				if (R) {
					this.router.navigate(['/users']);
				}
			});
	}

	ngOnInit(): void {}

	handlerSubmit(): void {
		// put the app in loading state
		this.uiStateService.sharingObservableData = {
			...this.uiStateService.sharingObservableValue,
			loading: true,
		};

		this.usersAuthService
			.authenticateUser(this.user.username, this.user.password)
			.pipe(take(1))
			.subscribe(
				(response) => {
					if (response.length == 1) {
						this.userStateService.sharingObservableData =
							response[0];

						// No more loading state
						this.uiStateService.sharingObservableData = {
							...this.uiStateService.sharingObservableValue,
							loading: false,
						};
					} else {
						// Error no one at the dbs match with the data
						this.uiStateService.sharingObservableData = {
							error: true,
							errorProblem:
								'Your username or password is incorrect',
							loading: false,
						};
					}
				},
				(err) =>
					// error with the db response
					(this.uiStateService.sharingObservableData = {
						error: true,
						errorProblem:
							'We have internal problems, try again later',
						loading: false,
					}),
			);
	}

	ngOnDestroy(): void {
		this.componentDestroyed.next();
		this.componentDestroyed.complete();
	}
}
