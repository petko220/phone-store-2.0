import { Injectable } from '@angular/core';
import { User } from 'src/types/user';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class StateManagementService {
  USER_KEY = '[user]';
  user: User | undefined;

  get isLogged(): boolean {

    return !!this.user;
  }

  constructor(
    private http: HttpClient
  ) {
    try {
      const lsUser = localStorage.getItem(this.USER_KEY) || "";
      this.user = JSON.parse(lsUser);
    } catch (error) {
      this.user = undefined;
    }
  }

  login(user: object) {
    const { appUrl } = environment;

    const headers = { 'content-type': 'application/json' };
    console.log(user);
    this.http.post<User>(`${appUrl}/users/login`, user, { headers }).subscribe(
      data => {
        this.user = data;
        localStorage.setItem(this.USER_KEY, JSON.stringify(this.user));

      }
    )
  }

  register(user: object) {
    const { appUrl } = environment;

    const headers = { 'content-type': 'application/json' };
    this.http.post<any>(`${appUrl}/users/register`, user, { headers }).subscribe(
      data => {
        this.user = data;
        localStorage.setItem(this.USER_KEY, JSON.stringify(this.user));

      }
    )
  }
  logout(): void {
    this.user = undefined;
    localStorage.removeItem(this.USER_KEY);
  }
}
