//Creating a component
import {Component} from '@angular/core';

//metadata of the component
@Component({
    selector:'app-product',
    templateUrl :'./products.component.html',
    styleUrls:['./products.component.css']

})

export class ProductComponent{
title ="Products";
total ={
    quantity:0,
    totalPrice:0
}

products = [
    {name:"iPhone",
id:1,
price:55000,
quantityInOrder :0,
totalPrice :0,
date: new Date()},
{name:'Samsung',
id:2,
price:35000,
quantityInOrder :0,
totalPrice :0,
date: new Date()}] //databinding

addToCart(product:any){
    product.quantityInOrder+=1;
    product.totalPrice = product.quantityInOrder*product.price;
    this.getTotal();
}
getTotal(){
    this.total.totalPrice =0;
    this.total.quantity =0;
    this.products.forEach(item=>{
        this.total.totalPrice+=item.totalPrice?item.totalPrice:0;
        this.total.quantity+=item.quantityInOrder
    })
    

}}

  

