import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private dataSvc:DataService) {
    console.log(this.dataSvc.countryList);
   }

  ngOnInit(): void {
  }
logincreds={
  "username":"",
  "Email":"",
  "Password":"",
  "adminID":"",
  "storeID":"",
  "StoreNumber":"",
  "CounterNumber":"",
  "PinNumber":"",
  "RoleName":""}

login(){
  //this.dataSvc.login(this.logincreds);
   console.log("Logged In!");
}
}
