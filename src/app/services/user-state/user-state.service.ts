import { Injectable } from '@angular/core';

// Rxjs observable
import { BehaviorSubject } from 'rxjs';

// Import interfaces
import { apiRequestI } from '@interfaces/user.interface';

@Injectable({
	providedIn: 'root',
})
export class UserStateService {
	// Initial state
	is!: apiRequestI;

	private sharingObservablePrivate: BehaviorSubject<apiRequestI> =
		new BehaviorSubject<apiRequestI>(this.is);
	constructor() {}

	// This method get the observer for this prop
	get sharingObservableObserver() {
		return this.sharingObservablePrivate.asObservable();
	}

	// This method set the info for the global context
	set sharingObservableData(res: apiRequestI) {
		this.sharingObservablePrivate.next(res);
	}
}
