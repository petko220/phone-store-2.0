import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StateManagementService } from '../core/services/state-management.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(
    private state: StateManagementService,
    private router: Router
  ) { }

  register(form: NgForm): void {
    const value: { email: string, password: string, repassword: string } = form.value;

    if (!value.email || !value.password || !value.repassword) {
      return console.log('soomething is missing');
    } if (value.password !== value.repassword) {
      return console.log('passowrds do not match');
      
    } else {
      try {
        let email = value.email;
        let password = value.password;
        let newUser = { email: email, password: password };
        console.log(newUser);

        this.state.register(newUser);
      } catch (error) {
        console.log(error);

      }
      
    }
    console.log();

  }
}
