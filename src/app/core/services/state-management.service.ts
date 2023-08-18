import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateManagementService {

  currentState:object = {}

  showState() {
    console.log(this.currentState);
    
  }
}
