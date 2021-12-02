import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isServerLive: boolean=false;


  constructor(private dataSvc:DataService) {
    console.log(this.dataSvc.countryList);
   }

   onServerStart(){
     this.isServerLive=true;
   }

  ngOnInit(): void {
  }

}
