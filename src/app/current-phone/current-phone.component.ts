import { Component, OnInit } from '@angular/core';
import { ApiService } from '../core/services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-current-phone',
  templateUrl: './current-phone.component.html',
  styleUrls: ['./current-phone.component.css']
})
export class CurrentPhoneComponent implements OnInit {

  phones: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService
  ) { }

  ngOnInit(): void {

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
