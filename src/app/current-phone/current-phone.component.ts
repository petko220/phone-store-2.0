import { Component, OnInit } from '@angular/core';
import { ApiService } from '../core/services/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/types/user';
import { Phone } from 'src/types/phone';

@Component({
  selector: 'app-current-phone',
  templateUrl: './current-phone.component.html',
  styleUrls: ['./current-phone.component.css']
})
export class CurrentPhoneComponent implements OnInit {

  phones: Phone[] = [];
  currentUser: User | undefined;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.currentUser = <User>JSON.parse(this.apiService.getCurrentUser());
    let phoneId = this.route.snapshot.params['phoneId']

    this.apiService.getOne(phoneId).subscribe({
      next: (phone) => {
          this.phones.push(phone)    
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  deletePhone() {
    let phoneId = this.route.snapshot.params['phoneId'];
    if (confirm("Are you certain you want to delete?") == true) {
      this.apiService.deletePhone(phoneId);
      this.router.navigate(['catalog']);
    } else {

    }
    
  }

}
