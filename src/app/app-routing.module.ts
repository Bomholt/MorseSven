import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MorseComponent} from './message/morse/morse.component';
import { MessagesComponent} from './message/messages/messages.component';
import { AllInOneComponent} from './message/all-in-one/all-in-one.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  { path: 'send', component: MorseComponent},
  { path: 'show', component: MessagesComponent},
  { path: 'all', component: AllInOneComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
