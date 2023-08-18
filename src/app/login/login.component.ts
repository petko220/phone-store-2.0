import { Component } from '@angular/core';
import { ApiService } from '../core/services/api.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public auth: any

  constructor(
    private apiService: ApiService,
    private router: Router,

  ) { }

  login(form: NgForm): void {
    const value: { email: string, password: string } = form.value;

    if (value.email === '' || value.password === '') {
      return console.log('email or password missing')
    } else {
      this.apiService.login(value).subscribe(data => {
        console.log(data);
        this.auth = data;
        //this.router.navigate(['/']);
      });
    }
  }
}