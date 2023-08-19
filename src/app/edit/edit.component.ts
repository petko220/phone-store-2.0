import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../core/services/api.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  constructor(
    private router: Router,
    private api: ApiService
  ) {}

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
  }  
}
