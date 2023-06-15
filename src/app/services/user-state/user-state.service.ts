import { Injectable } from '@angular/core';

// Rxjs observable
import { BehaviorSubject } from 'rxjs';

// Import interfaces
import { apiResponseIbase } from '@interfaces/user.interface';

@Injectable({
	providedIn: 'root',
})
export class UserStateService {
	// Initial state
	is!: apiResponseIbase;

	private sharingObservablePrivate: BehaviorSubject<apiResponseIbase> =
		new BehaviorSubject<apiResponseIbase>(this.is);
	constructor() {}

	// This method get the observer for this prop
	get sharingObservableObserver() {
		return this.sharingObservablePrivate.asObservable();
	}

	// This method set the info for the global context
	set sharingObservableData(res: apiResponseIbase) {
		this.sharingObservablePrivate.next(res);
	}

	LogOut(): void {
		this.sharingObservableData = this.is;
	}
}
