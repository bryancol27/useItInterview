import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

// Import interfaces
import { apiRequestI } from '@interfaces/user.interface';

// Import services
import { UsersAuthService } from '@services/user-auth/users-auth.service';
import { UserStateService } from '@services/user-state/user-state.service';

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
	// UI VARIABLES

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
		private router: Router,
	) {
		userStateService.sharingObservableObserver
			.pipe(takeUntil(this.componentDestroyed))
			.subscribe((R) => {
				if (R) {
					this.router.navigate(['/hello']);
				}
			});
	}

	ngOnInit(): void {}

	handlerSubmit(): void {
		this.usersAuthService
			.authenticateUser(this.user.username, this.user.password)
			.pipe(take(1))
			.subscribe(
				(response) => {
					if (response.length == 1) {
						this.userStateService.sharingObservableData =
							response[0];
					} else {
					}
				},
				(err) => console.log('ERROR'),
			);
	}

	ngOnDestroy(): void {
		this.componentDestroyed.next();
		this.componentDestroyed.complete();
	}
}
