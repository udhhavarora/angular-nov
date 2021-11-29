import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private httpClient:HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get('https://restcountries.com/v2/all').toPromise().then((x:any)=>{
      console.log(x);
      this.countries=[];
      for(let i=0;i<x.length;i++){
        this.countries.push({name:x[i].name,countryCode:x[i].alpha3Code})
      }
      console.log(this.countries);

    
    
    
    }).catch(ex=>{
        console.log(ex);
      });

      
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
