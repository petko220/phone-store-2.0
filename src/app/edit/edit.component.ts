import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../core/services/api.service';
import { User } from 'src/types/user';
import { Phone } from 'src/types/phone';
import { PhoneValidatorService } from '../core/services/phone.validator.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  phones: Phone[] = [];
  currentUser: User | undefined;
  message: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private api: ApiService,
    private validate: PhoneValidatorService,
  ) {}

  ngOnInit(): void {
   
    let phoneId = this.route.snapshot.params['phoneId']

    this.api.getOne(phoneId).subscribe({
      next: (phone) => {
          this.phones.push(phone)    
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  edit(form: NgForm) {
    const value: Phone = form.value;

    const checker = this.validate.validatePhone(value);
    console.log(checker);
    
    if(checker === 'OK') {
      let phoneId = this.route.snapshot.params['phoneId'];  
      this.api.editPhone(phoneId, value);
      this.router.navigate(['catalog']);
    } else {
      this.message = checker;
    }

  }  
}
