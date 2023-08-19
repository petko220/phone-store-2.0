import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../core/services/api.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  constructor(
    private router: Router,
    private api: ApiService
  ) {}

  create(form: NgForm) {
    const value: {
      make: string,
      model: string,
      year: number,
      OS: string,
      condition: string,
      price: number,
      imageUrl: string
    } = form.value

    this.api.create(value);
    
  }
}
