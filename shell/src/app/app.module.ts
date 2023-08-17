import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoadFragmentsComponent } from './app/mfe/load-fragments/load-fragments.component';
import { MfeServiceService } from './app/mfe/mfe-service.service';
import { HomeComponent } from './home/home.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    LoadFragmentsComponent,
    HomeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    // Add APP_INITIALIZER
    {
      provide: APP_INITIALIZER,
      useFactory: (mfeService: MfeServiceService) => () => mfeService.init(),
      deps: [MfeServiceService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
