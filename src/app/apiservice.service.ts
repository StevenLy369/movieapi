import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  apikey: string = "f28aaf44cf6e1d7966838d2e0379f41b";
  movieList: any[] = []
  favList: any[] = []
 

  constructor(private http: HttpClient ) { }

  getImdbData(searchResult:string){
    this.http.get(`https://api.themoviedb.org/3/search/movie?api_key=${this.apikey}&query=${searchResult}`).subscribe(response => {
      console.log(response);
      this.movieList = response["results"];  

    });;
  }

  getMovieList() {
    return this.movieList;
  }

  getFavList() {
    return this.favList;
  }

  addFavs(newFav): any[] {
    this.favList.push(newFav);
    console.log(this.favList);
    return this.favList;
  }


  getFavs(): any[] {
    // console.log("Returning the favorites array...");
    return this.favList;
  }

  getFav(id: number | string): any {
    let index = this.favList.findIndex(fav => fav.id == id);
    return this.favList[index];
  }






}
