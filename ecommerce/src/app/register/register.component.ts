import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private dataSvc:DataService) {
    console.log(this.dataSvc.countryList);
    this.countries = this.dataSvc.countryList;
   }
   ngOnInit(): void{
   }

  register = {
    email:"",
    username:"",
    password:"",
    phone:"",
    confirmpassword:"",
    age:"",
    gender:"",
    country:"",
    agreeTerms:false
    
  }
  registerUser(){
    console.log(this.register);
  }
  
  countries = [{name:'India',countryCode:'IN'},
{name:'United States of America', countryCode:'USA'}];


}
