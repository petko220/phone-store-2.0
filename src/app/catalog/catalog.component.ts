import { Component,OnInit } from '@angular/core';
import { ApiService } from '../core/services/api.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit{
  phones: any[] = []
  
  constructor(private apiService: ApiService) {

  }

  ngOnInit(): void {
    this.apiService.getAll().subscribe({
      next: (phones) => {
        this.phones = phones;
      },

      error: (error) => {

        console.log(error.message);
      }
    })
  }
}
