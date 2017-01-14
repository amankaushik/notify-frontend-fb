import { Component, NgModule } from '@angular/core';
import { NewsService } from './news.service';
import { NgClass } from '@angular/common';

@NgModule({
    declarations: [NgClass]
})

@Component({
    selector: 'app-news-list',
    templateUrl: './news-list.component.html'
})
export class NewsListComponent {
    constructor(public newsService: NewsService) {
        //console.log('NewsListComponent');
        //console.log(this.newsService);
    }
}