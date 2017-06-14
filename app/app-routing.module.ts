import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './app/body/home/home.component';
import {VideoDetailsComponent} from './app/body/video-details/video-details.component';
import {VideoBoxComponent} from './app/body/video-box/video-box.component';
import {ReviewsComponent} from './app/body/reviews/reviews.component';
import {DonateComponent} from './app/body/donate/donate.component';


const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'reviews', component: ReviewsComponent},
    {path: 'video-box', component: VideoBoxComponent},
    {path: 'video-details', component: VideoDetailsComponent},
    {path: 'donate', component: DonateComponent},
    // {path: 'api/videoDocuments/:id', component: ReviewsComponent},
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})


export class AppRoutingModule {

}
