import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SearchcriteriaComponent } from './searchcriteria/searchcriteria.component';
import { MovielistComponent } from './movielist/movielist.component';
import { WatchlistComponent } from './watchlist/watchlist.component';
import { FormsModule } from "@angular/forms";
import { ApiserviceService } from './apiservice.service';


const appRoutes: Routes = [
  {path: "search", component: SearchcriteriaComponent},
  {path: "movielist", component: MovielistComponent},
  {path: "watchlist", component: WatchlistComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    SearchcriteriaComponent,
    MovielistComponent,
    WatchlistComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ApiserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
