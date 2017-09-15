import {Component, OnInit,} from '@angular/core';
import {Router} from "@angular/router";
import { ClientService} from "../client.service";


import { Client } from "../client";


@Component({
  selector: 'app-client',
  templateUrl: './app.client.component.html',
  styleUrls: ['./app.client.component.css']
})
export class AppClientComponent implements OnInit {


  clients: Client[];
  client: Client;


  constructor(
    private router: Router,
    private service: ClientService
    ) {}

    RecupererClient(){
    this.service.getClient().then(toto => this.clients = toto);
    }

    AfficherDetail(index: number){
     this.service.ShowDetail(index);

  }
  ngOnInit(){
    this.RecupererClient();
  }

}
