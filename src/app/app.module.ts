import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import { SearchcriteriaComponent } from './searchcriteria/searchcriteria.component';
import { MovielistComponent } from './movielist/movielist.component';
import { WatchlistComponent } from './watchlist/watchlist.component';
import { FormsModule } from "@angular/forms";
import { ApiserviceService } from './apiservice.service';

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
    FormsModule
  ],
  providers: [ApiserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
