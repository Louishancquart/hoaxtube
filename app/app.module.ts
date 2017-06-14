import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
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
import {ReviewsComponent} from './app/body/reviews/reviews.component';
import {DonateComponent} from './app/body/donate/donate.component';
import {MenuComponent} from './app/head/menu/menu.component';
import {PageNotFoundComponent} from './app/utils/pageNotFound/page-not-found.component';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
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
    ],

    providers: [
        DocumentService,
    ],

    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}
