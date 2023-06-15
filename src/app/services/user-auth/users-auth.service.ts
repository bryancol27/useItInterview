import { Injectable } from '@angular/core';

// RXJS OPERATORS
import { Observable } from 'rxjs';

// Dependencies angular needed
import { HttpClient } from '@angular/common/http';

// Interfaces
import { apiRequestI } from '@interfaces/user.interface';

@Injectable({
	providedIn: 'root',
})
export class UsersAuthService {
	constructor(private http: HttpClient) {}

	authenticateUser(
		username: string,
		password: string,
	): Observable<apiRequestI[]> {
		const stringAPI = `http://localhost:3000/users?userName=${username}&password=${password}`;

		return this.http.get<apiRequestI[]>(stringAPI);
	}
}