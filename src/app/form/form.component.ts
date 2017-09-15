import { Component, Input } from '@angular/core';
import {ClientService} from "../client.service";
import {Router} from "@angular/router";

import { CLIENTS } from "../clients";
import { Client } from "../client";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent  {

  constructor(
    private route: Router,
    private service: ClientService
  ) {}


  clients =  CLIENTS;
  client: Client;
  Nom: string;
  Prenom: string;
  Email: string;



  ajouterClient(nom: string, prenom: string, email: string) {
    console.log(nom , prenom);
    this.service.AddToList(nom, prenom, email);
    let url = ['/accueil'];
    this.route.navigate(url);

  }


}
