import { Component } from '@angular/core';
import {GetHeroesServer} from "./getHeroes.server";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[GetHeroesServer]
})
export class AppComponent {
  title = 'app';
  // hero  = Heroes;
  constructor(private GetHeroesServer:GetHeroesServer){

  }
  heroesData = this.GetHeroesServer.getData();
}
