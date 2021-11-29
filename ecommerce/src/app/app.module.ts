import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { FooterComponent } from 'src/footer/footer.component';
import { ProductDetailsComponent } from 'src/product-details/product-details.component';
import { ProductComponent } from 'src/products/products.component';
import { HeaderComponent } from '../header/header.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductComponent,
    ProductDetailsComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    HomeComponent,
    ForgotpasswordComponent,
    ResetpasswordComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path : "login",component:LoginComponent},
      {path : "register",component:RegisterComponent},
      {path : "forgotpassword",component:ForgotpasswordComponent},
      {path : "reset",component:ResetpasswordComponent},
      {path : "profile",component:ProfileComponent},
      {path : "",component:HomeComponent}

])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }