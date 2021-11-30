//Creating a component
import {Component} from '@angular/core';
import { ProductsvcService } from 'src/app/productsvc.service';

//metadata of the component
@Component({
    selector:'app-header',
    templateUrl :'./header.component.html',
    styleUrls:['./header.component.css']

})

export class HeaderComponent{
    constructor(private productSvc:ProductsvcService){


    }
title ="DBS Bank";
navItems=[{path:"",display:"Home"},
    {path:"login",display:"Login"},
    {path:"register",display:"Register"},
    {path:"products",display:"Products"}
// navitems = ['Home','Sports','Apparel','Cars',"Bikes","Cars"
// ]; //databinding
]; 

totalProducts = {
    count:0
}
getTotalProducts(){
    return this.productSvc.getProducts().filter((x:any)=>x.inOrder>0).length;
    }


}