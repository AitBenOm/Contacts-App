import { Component } from '@angular/core';

import { CLIENTS } from "./clients";
import { Client } from "./client";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';


  clients =  CLIENTS;
  client: Client;
//   SelectedClient: Client;

}
