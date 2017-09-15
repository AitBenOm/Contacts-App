import {Component,  OnInit} from '@angular/core';
import {ClientService} from "../client.service";
import {Router, ActivatedRoute} from "@angular/router";

import {CLIENTS} from "../clients";
import {Client} from "../client";

@Component({
  selector: 'app-detail',
  templateUrl: './app.detail-client.component.html',
  styleUrls: ['./app.detail-client.component.css']
})


export class AppDetailClientComponent implements OnInit {
  clients= CLIENTS;
  client: Client;
  edit: boolean = false;
  texteButton: string = 'Modifier';

  constructor(
    private route: ActivatedRoute,
    private service: ClientService,
    private router: Router) {}

    ngOnInit(){
    let id= +this.route.snapshot.params['id'];
    this.client= this.clients[id];


    }
  ModifierClient(){
      if(this.edit==true){
        this.edit=false;
        this.texteButton='Modifier';
        let url = ['/accueil'];
        this.router.navigate(url);

      }else{
        this.edit=true;
        this.texteButton='Sauvegarder';

      }
      return false;

      }
      SupprimerClient(index: number){
    this.service.DeletteClient(index-1);
    return false;
      }

}
