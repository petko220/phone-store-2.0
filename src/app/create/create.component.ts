import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../core/services/api.service';
import { PhoneValidatorService } from '../core/services/phone.validator.service';
import { Phone } from 'src/types/phone';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  constructor(
    private router: Router,
    private api: ApiService,
    private validate: PhoneValidatorService,
  ) {}

  create(form: NgForm) {
    const value: Phone = form.value
    console.log(value);
    
    let checker = this.validate.validatePhone(value);
    console.log(checker);
    if(checker = 'OK') {
      this.api.create(value);
      this.router.navigate(['catalog']);
    }
 
  }
}
