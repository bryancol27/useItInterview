import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Rxjs Operators
import { Subject, take, takeUntil } from 'rxjs';

// Import services
import { UsersAuthService } from '@services/user-auth/users-auth.service';
import { UserStateService } from '@services/user-state/user-state.service';

// Import interfaces
import { apiResponseIbase } from '@interfaces/user.interface';

@Component({
	selector: 'app-users',
	templateUrl: './users.component.html',
	styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
	// Destroy suscription
	private componentDestroyed = new Subject<void>();

	// All users instance
	users!: apiResponseIbase[];

	constructor(
		private userStateService: UserStateService,
		private usersAuthService: UsersAuthService,
		private router: Router,
	) {
		// this.userStateService.sharingObservableObserver
		// 	.pipe(takeUntil(this.componentDestroyed))
		// 	.subscribe((res) => {
		// 		if (!res) {
		// 			this.router.navigate(['/']);
		// 		}
		// 	});

		this.usersAuthService
			.getAllUsers()
			.pipe(take(1))
			.subscribe(
				(res) => (this.users = res),
				(err) => console.log(err),
			);
	}

	ngOnInit(): void {}

	ngOnDestroy(): void {
		this.componentDestroyed.next();
		this.componentDestroyed.complete();
	}
}
