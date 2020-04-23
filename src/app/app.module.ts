import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AmplifyAngularModule, AmplifyService } from 'aws-amplify-angular';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [AppComponent, NavComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule, AmplifyAngularModule],
  providers: [AmplifyService],
  bootstrap: [AppComponent]
})
export class AppModule {}
