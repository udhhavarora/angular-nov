import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FooterComponent } from 'src/footer/footer.component';
import { ProductDetailsComponent } from 'src/product-details/product-details.component';
import { ProductComponent } from 'src/products/products.component';
import { HeaderComponent } from '../header/header.component';
import { AppComponent } from './app.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductComponent,
    ProductDetailsComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }