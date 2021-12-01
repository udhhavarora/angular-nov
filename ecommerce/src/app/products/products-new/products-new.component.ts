import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ProductsvcService } from 'src/app/productsvc.service';


@Component({
  selector: 'app-products-new',
  templateUrl: './products-new.component.html',
  styleUrls: ['./products-new.component.css']
})
export class ProductsNewComponent implements OnInit {
  products: any
  constructor(private productSvc: ProductsvcService) {
    this.fetchProductsFromService();
    if (this.products.length == 0) {
      this.loadProductsFromApi();
    }
  }
  loadProductsFromApi() {
    this.productSvc.getProductsFromApi()
      .subscribe((result: any) => {
        if (result.length > 0) {
          result = result.map((item: any) => {
            return { ...item, inOrder: 0 }
          })
        }
        this.productSvc.setProducts(result);
        this.fetchProductsFromService();
      },
        (ex) => {
          console.log(ex);
        });
    // .then((result: any) => {
    //   console.log(result);
    //   if (result.length > 0) {
    //     result = result.map((item: any) => {
    //       return { ...item, inOrder: 0 }
    //     })
    //   }
    //   this.productSvc.setProducts(result);
    //   this.fetchProductsFromService();
    // })
    // .catch((ex: any) => {
    //   console.log(ex);
    // })
  }
  fetchProductsFromService() {
    this.products = this.productSvc.getProducts();
  }

  ngOnInit(): void {
  }
  addToCart(p: any) {
    p.inOrder += 1;
    this.productSvc.setProducts(this.products)
  }
  removeFromCart(p: any) {
    if (p.inOrder >= 1) {
      p.inOrder -= 1;
      this.productSvc.setProducts(this.products)
    }

  }
  //add to cart
  //remove from cart
  // setProducts always need to updated.
}