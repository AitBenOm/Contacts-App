import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import {FormComponent} from "./form/form.component";
import { AppDetailClientComponent } from './app.detail-client/app.detail-client.component';
import {routing} from "./app.routing";
import { AppClientComponent } from './app.client/app.client.component';
import { ClientService} from "./client.service";


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    AppDetailClientComponent,
    AppClientComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [ ClientService],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule { }
