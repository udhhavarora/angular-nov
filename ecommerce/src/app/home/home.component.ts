import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
// import {appServercolor} from '../servercolor.directive';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isServerLive : boolean = false;
  serverName = '';

  constructor(private dataSvc:DataService) {
    console.log(this.dataSvc.countryList);
   }

   onServerStart() {
     this.isServerLive = !this.isServerLive;
   }

   onUpdateServerName(event: Event) { // (event: any)
    this.serverName = 
    (<HTMLInputElement>event.target).value;
    console.log(event);
  }

   ngOnInit(): void {
  }

}