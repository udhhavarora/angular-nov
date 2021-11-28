import { Component } from '@angular/core'

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html',
    styleUrls: ['./body.component.css']


})

export class BodyComponent {
    title = "I am the body.";
    products = [{ imgurl: 'https://pyxis.nymag.com/v1/imgs/a98/d0a/ad37aae9d281b562d1afe26fdc8a28cbd6.rsquare.w600.jpg' }, { imgurl: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/b574da1d-91af-424c-8778-11590785c861/blazer-mid-77-vintage-mens-shoes-nw30B2.png' },
    { imgurl: 'https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/e725107a3d7041389f94ab220123fbcb_9366/Bravada_Shoes_Black_FV8085_01_standard.jpg' }]}


