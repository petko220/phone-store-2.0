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

  create(phone: object) {
    let authorization = String(localStorage.getItem('[user]'));
    authorization = JSON.parse(authorization).accessToken;
    
    const { appUrl } = environment;
    const headers = {
     'content-type': 'application/json',
     'X-Authorization': `${authorization}`
    };

    this.http.post<any>(`${appUrl}/data/phones`, phone, { headers }).subscribe(
      data => {
        console.log(data);
        
      }
    )

  }

  getCurrentUser(): string {
    let user = (localStorage.getItem('[user]'));
    return String(user);
  }

}
