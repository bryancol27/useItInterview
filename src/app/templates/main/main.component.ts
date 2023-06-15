import { Component, OnInit } from '@angular/core';

// Import services
import { UiStateService } from '@services/ui-state/ui-state.service';

// Import interfaces
import { uiI } from '@interfaces/ui.interface';

@Component({
	selector: 'app-main',
	templateUrl: './main.component.html',
	styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
	// General UI elements (loader and error components)
	uiState: uiI = {
		loading: false,
		error: false,
		errorProblem: '',
	};
	constructor(private uiStateService: UiStateService) {
		this.uiStateService.sharingObservableObserver.subscribe((res) => {
			console.log(res);
			this.uiState = res;
		});
	}

	ngOnInit(): void {}
}
