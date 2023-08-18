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
}
