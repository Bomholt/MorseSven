import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';
import { MomentModule } from 'angular2-moment';
import {MessageService} from './message/shared/message.service';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import { MorseComponent } from './message/morse/morse.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './message/shared/navbar/navbar.component';
import { MessagesComponent } from './message/messages/messages.component';
import { AllInOneComponent } from './message/all-in-one/all-in-one.component';

@NgModule({
  declarations: [
    AppComponent,
    MorseComponent,
    NavbarComponent,
    MessagesComponent,
    AllInOneComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    MomentModule, AppRoutingModule
  ],
  providers: [
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
