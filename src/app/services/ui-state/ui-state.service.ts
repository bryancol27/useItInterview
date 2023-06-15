import { Injectable } from '@angular/core';

// Rxjs observable
import { BehaviorSubject } from 'rxjs';

// Import interface
import { uiI } from '@interfaces/ui.interface';

@Injectable({
	providedIn: 'root',
})
export class UiStateService {
	// Initial state
	is!: uiI;

	private sharingObservablePrivate: BehaviorSubject<uiI> =
		new BehaviorSubject<uiI>(this.is);

	constructor() {}

	// This method get the observer for this prop
	get sharingObservableObserver() {
		return this.sharingObservablePrivate.asObservable();
	}

	// This method get the current value
	get sharingObservableValue() {
		return this.sharingObservablePrivate.value;
	}

	// This method set the info for the global context
	set sharingObservableData(res: uiI) {
		this.sharingObservablePrivate.next(res);

		// Delete errors by passed time
		if (res.error && res.errorProblem != '') {
			setTimeout(() => {
				this.sharingObservablePrivate.next(this.is);
			}, 3000);
		}
	}
}
