import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {MdTabsModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';

import {AppComponent} from './app/app.component';
import {AppRoutingModule} from './app-routing.module';

import {DocumentService} from './services/document.service';
import {InMemoryDataService} from './services/in-memory-data.service';


import {HomeComponent} from './app/body/home/home.component';
import {VideoDetailsComponent} from './app/body/video-details/video-details.component';
import {VideoBoxComponent} from './app/body/video-box/video-box.component';
import {ReviewsComponent} from '../../relytube/src/app/main/reviews/reviews.component';
import {DonateComponent} from './app/body/donate/donate.component';
import {MenuComponent} from './app/head/menu/menu.component';
import {PageNotFoundComponent} from './app/utils/pageNotFound/page-not-found.component';
import {NotificationService} from './services/notification.service';
import {YoutubePlayerService} from './services/youtube-player.service';
import {YoutubeApiService} from './services/youtube-api.service';
import {VideosSearchComponent} from './app/head/videos-search/videos-search.component';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        MdTabsModule,
        BrowserAnimationsModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService),
        AppRoutingModule
    ],

    declarations: [
        HomeComponent,
        AppComponent,
        VideoBoxComponent,
        MenuComponent,
        VideoDetailsComponent,
        ReviewsComponent,
        DonateComponent,
        PageNotFoundComponent,
        VideosSearchComponent,
    ],

    providers: [
        DocumentService,
        YoutubeApiService,
        YoutubePlayerService,
        NotificationService
    ],

    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}
