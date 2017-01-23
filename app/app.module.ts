import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from "./app/app.component";
import {ChartComponent} from "./chart/chart.component";
import {VideoBoxComponent} from "./video-box/video-box.component";
import {MenuComponent} from "./menu/menu.component"
import {VideoDetailsComponent} from "./video-details/video-details.component";
import {ReviewsComponent} from "./reviews/reviews.component";
import {HomeComponent} from "./home/home.component";
import {DonateComponent} from "./donate/donate.component";
import {PluginComponent} from "./plugin/plugin.component";

@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule,
  ],

  declarations: [
    HomeComponent,
    AppComponent,
    ChartComponent,
    VideoBoxComponent,
    MenuComponent,
    VideoDetailsComponent,
    ReviewsComponent,
    DonateComponent,
    PluginComponent,
  ],

  bootstrap: [
  AppComponent
  ]
})
export class AppModule {
}
