import {Http} from '@angular/http';
import {Injectable, OnInit} from '@angular/core';
import {Hero} from "./heroClass";

const Data:Hero[] = [{
  name:'张三',
  age:19
},{
  name:'李四',
  age:44
},{
  name:'王五',
  age:39
},{
  name:'李六',
  age:10
}];
@Injectable()

export class GetHeroesServer{

  getData():Hero[]{
    return Data;
  }
}
