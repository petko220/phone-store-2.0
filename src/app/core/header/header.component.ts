import { Component } from '@angular/core';
import { StateManagementService } from '../services/state-management.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor (
    private state: StateManagementService,
    private router: Router
  ) {}

  get isLoggedIn(): boolean{
    return this.state.isLogged;
  }

  logout(): void {
    this.state.logout();
    this.router.navigate(['']);
  }
  
}
