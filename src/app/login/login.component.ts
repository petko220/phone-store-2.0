import { Component } from '@angular/core';
import { ApiService } from '../core/services/api.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { StateManagementService } from '../core/services/state-management.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  constructor(
    private apiService: ApiService,
    private router: Router,
    private stateManager: StateManagementService,
  ) { }

  login(form: NgForm): void {
    const value: { email: string, password: string } = form.value;

    if (value.email === '' || value.password === '') {
      return console.log('email or password missing')
    } else {
      this.apiService.login(value).subscribe(data => {
        this.stateManager.currentState = data;
        this.stateManager.showState()
        //this.router.navigate(['/']);
      });
    }
  }
}