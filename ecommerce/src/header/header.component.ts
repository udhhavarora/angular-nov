//Creating a component
import {Component} from '@angular/core';

//metadata of the component
@Component({
    selector:'app-header',
    templateUrl :'./header.component.html',
    styleUrls:['./header.component.css']

})

export class HeaderComponent{
title ="DBS Bank";
navitems = ['Home','Sports','Apparel','Cars',"Bikes","Cars"
]; //databinding
}  
