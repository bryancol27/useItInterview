import { Injectable } from '@angular/core';

// RXJS OPERATORS
import { Observable } from 'rxjs';

// Dependencies angular needed
import { HttpClient } from '@angular/common/http';

// Interfaces
import { apiResponseIbase } from '@interfaces/user.interface';

@Injectable({
	providedIn: 'root',
})
export class UsersAuthService {
	constructor(private http: HttpClient) {}

	authenticateUser(
		username: string,
		password: string,
	): Observable<apiResponseIbase[]> {
		const stringAPI = `http://localhost:3000/users?userName=${username}&password=${password}`;

		return this.http.get<apiResponseIbase[]>(stringAPI);
	}

	getAllUsers(): Observable<apiResponseIbase[]> {
		const stringAPI = 'http://localhost:3000/users';

		return this.http.get<apiResponseIbase[]>(stringAPI);
	}

	getUserById(id: string): Observable<apiResponseIbase[]> {
		const stringAPI = `http://localhost:3000/users?id=${id}`;

		return this.http.get<apiResponseIbase[]>(stringAPI);
	}
}
