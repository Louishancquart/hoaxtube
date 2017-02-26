import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from "./app/app.component";
import {ChartComponent} from "./chart/chart.component";
import {VideoBoxComponent} from "./video-box/video-box.component";
import {MenuComponent} from "./menu/menu.component";
import {VideoDetailsComponent} from "./video-details/video-details.component";
import {ReviewsComponent} from "./reviews/reviews.component";
import {HomeComponent} from "./home/home.component";
import {DonateComponent} from "./donate/donate.component";
import {PluginComponent} from "./plugin/plugin.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {DocumentService} from "./services/document.service";
import {FormsModule} from "@angular/forms";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    // HttpModule,
    // InMemoryWebApiModule.forRoot(InMemoryDataService)
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
    LoginComponent,
    RegisterComponent,
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