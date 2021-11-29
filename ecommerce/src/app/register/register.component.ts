import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
  


}
