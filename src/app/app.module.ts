import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SmsNotificationsComponent } from './sms-notifications/sms-notifications.component'


@NgModule({
  declarations: [
    AppComponent,
    SmsNotificationsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
