import { Component } from '@angular/core';
import { StateManagementService } from '../services/state-management.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor (
    private stateManager: StateManagementService
  ) {}

  state = this.stateManager.currentState;
}
