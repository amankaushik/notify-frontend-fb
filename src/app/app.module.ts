import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NewsListComponent } from './news-list.component';
import { NewsService } from './news.service';
import {NewsDataComponent} from "./news-data.component";
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsListComponent, 
    NewsDataComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [NewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
