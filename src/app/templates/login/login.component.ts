import { Component, OnInit } from '@angular/core';

// Import interfaces
import { apiRequestI } from '@interfaces/user.interface';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
	user: apiRequestI = {
		username: '',
		password: '',
	};

	constructor() {}

	ngOnInit(): void {}

	handlerSubmit(): void {
		console.log(this.user);
	}
}
