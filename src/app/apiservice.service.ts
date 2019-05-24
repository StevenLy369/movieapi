import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  apikey: string = "f28aaf44cf6e1d7966838d2e0379f41b";

  constructor(private http: HttpClient ) { }

  getImdbData(searchResult:string){
    return this.http.get(`https://api.themoviedb.org/3/search/movie?api_key=${this.apikey}&query=${searchResult}`);


  }






}
