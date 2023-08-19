import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../core/services/api.service';
import { User } from 'src/types/user';
import { Phone } from 'src/types/phone';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  phones: Phone[] = [];
  currentUser: User | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private api: ApiService
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
    const value: {
      make: string,
      model: string,
      year: number,
      OS: string,
      condition: string,
      price: number,
      imageUrl: string
    } = form.value

    let phoneId = this.route.snapshot.params['phoneId'];  
    this.api.editPhone(phoneId, value);

    this.router.navigate(['catalog']);

  }  
}
