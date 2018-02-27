import {Component,Input} from '@angular/core';
import {Hero} from "./heroClass";


@Component({
  selector: 'heroes-list',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent{
  @Input()heroes :Hero;

}
