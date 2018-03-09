import { Component,OnInit } from "@angular/core";
import { Iproduct } from "./product";
import { ActivatedRoute , Router } from "@angular/router";
import { ProductService } from "./product.service";
@Component({
templateUrl : 'product-details.component.html'
})

export class ProductDetails implements OnInit{

pageTitle : string ='Poduct Detail';
product : Iproduct;
errorMessage: string;


constructor(private _route: ActivatedRoute,
    private _router: Router,
    private _productService: ProductService) {
  }
ngOnInit() : void {
     let id = +this._route.snapshot.params['id'];
     this.pageTitle += `${id}`;
     this._productService.getProducts(id).subscribe(
        product => this.product = product,
        error => this.errorMessage = <any>error);
}
onBack() : void{
    this._router.navigate(['/products'])

}
}