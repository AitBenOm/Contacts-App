import {Injectable } from "@angular/core";
import {Router} from "@angular/router";

import { CLIENTS } from "./clients";
import { Client } from "./client";

@Injectable()
export class ClientService {

clients = CLIENTS;

  constructor(
    private router: Router,
  ) {}


getClient() {
  return Promise.resolve(this.clients);
}
AddToList(nom: string, prenom: string, email: string) {

  console.log("Service"+nom , prenom);

  let id = this.clients.length + 1;
  let newClient: Client = new Client(id, prenom , nom , email, false);
  this.clients.push(newClient);

}
  ShowDetail(index: number){
    // this.cust= this.clients[index];
    let url = ['/detail',index];
    this.router.navigate(url);

  }

  DeletteClient(index: number){
    this.clients.splice(index,1);
    let url = ['/accueil'];
    this.router.navigate(url);


  }

}
