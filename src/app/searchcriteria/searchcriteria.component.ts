import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from "../apiservice.service"

@Component({
  selector: 'searchcriteria',
  templateUrl: './searchcriteria.component.html',
  styleUrls: ['./searchcriteria.component.css']
})
export class SearchcriteriaComponent implements OnInit {
  
  movieList:any[] = []

  

  constructor(private apiService: ApiserviceService ) { }

  ngOnInit() {
  }
    searchImdb(form){

    this.apiService.getImdbData(form.value.searchResult).subscribe(response => {
      console.log(response);
      this.movieList = response["results"];

      
    });
    
  }
}
