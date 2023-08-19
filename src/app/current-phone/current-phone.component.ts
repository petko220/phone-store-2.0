import { Component, OnInit } from '@angular/core';
import { ApiService } from '../core/services/api.service';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/types/user';

@Component({
  selector: 'app-current-phone',
  templateUrl: './current-phone.component.html',
  styleUrls: ['./current-phone.component.css']
})
export class CurrentPhoneComponent implements OnInit {

  phones: any[] = [];
  currentUser: User | undefined;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.currentUser = <User>JSON.parse(this.apiService.getCurrentUser());
    console.log(this.currentUser);
    

    let phoneId = this.route.snapshot.params['phoneId']
    console.log(phoneId);

    this.apiService.getOne(phoneId).subscribe({
      next: (phone) => {
        console.log(this.phones);
        
        this.phones.push(phone)
        
        console.log(this.phones);
        
      },
      error: (err) => {
        console.log(err);
      }
    })

  }

}
