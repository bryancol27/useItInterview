import { Component, OnInit, OnDestroy } from '@angular/core';

// Rxjs operators
import { Subject, takeUntil } from 'rxjs';

// Import services
import { UserStateService } from '@services/user-state/user-state.service';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit, OnDestroy {
	loggedPerson: boolean = false;

	// Destroy suscription
	private componentDestroyed = new Subject<void>();

	constructor(private userStateService: UserStateService) {
		// Suscription to know if the client are logged
		this.userStateService.sharingObservableObserver
			.pipe(takeUntil(this.componentDestroyed))
			.subscribe((r) => {
				r ? (this.loggedPerson = true) : (this.loggedPerson = false);
			});
	}

	ngOnInit(): void {}

	ngOnDestroy(): void {
		this.componentDestroyed.next();
		this.componentDestroyed.complete();
	}

	logOut(): void {
		this.userStateService.LogOut();
	}
}
