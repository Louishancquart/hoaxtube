import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ChartComponent} from "./chart/chart.component";
import {HomeComponent} from "./home/home.component";
import {VideoDetailsComponent} from "./video-details/video-details.component";
import {VideoBoxComponent} from "./video-box/video-box.component";
import {ReviewsComponent} from "./reviews/reviews.component";
import {PluginComponent} from "./plugin/plugin.component";
import {DonateComponent} from "./donate/donate.component";


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',  component: HomeComponent },
  { path: 'chart',     component: ChartComponent },
  { path: 'reviews',     component: ReviewsComponent },
  { path: 'video-box',     component: VideoBoxComponent },
  { path: 'video-details',     component: VideoDetailsComponent },
  { path: 'plugin',     component: PluginComponent },
  { path: 'donate',     component: DonateComponent },
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})


export class AppRoutingModule {

}
