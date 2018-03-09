import { Component, OnInit } from "@angular/core";
import { Iproduct } from "./product";
import { ProductService } from "./product.service";


@Component({
selector: 'pm-product',
templateUrl: 'product-list.component.html'
})

export class ProductListComponet implements OnInit {
    pageTitle : string ="Product List";
    imageWidth : number = 20;
    imageMargin : number = 2;
    
    listFilter : string;
    showImage : boolean = false;
    errorMessage : string;
    products : Array<Iproduct> ;

    constructor(private _productService  : ProductService){
        
    }
    onRatingClicked( message : string)
    {
        this.pageTitle = 'Product List' + message;
    }
    ngOnInit() : void {
         this._productService.getProduct().subscribe(products => this.products = products,
         error => this.errorMessage = error);
         ;
         ;
    }
}