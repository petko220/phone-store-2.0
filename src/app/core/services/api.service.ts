import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Phone } from 'src/types/phone';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  getAll() {
    const { appUrl } = environment;
    return this.http.get<Phone[]>(`${appUrl}/data/phones`);
  }

  getOne(id: string) {
    const { appUrl } = environment;
    return this.http.get<any>(`${appUrl}/data/phones/${id}`);
  }

  login(user: object) {
    const { appUrl } = environment;

    const headers = { 'content-type': 'application/json' };
    console.log(user);
    return this.http.post<any>(`${appUrl}/users/login`, user, { headers });
    
  }
}
