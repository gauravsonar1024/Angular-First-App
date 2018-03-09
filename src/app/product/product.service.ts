import { Injectable } from "@angular/core";
import { Iproduct } from "./product";
import { Response , Http } from "@angular/http";
import { Observable } from "rxjs/observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
 export class ProductService {

    private _productUrl = 'api/products/products.json'

    constructor( private _http : Http) {}

    getProduct(): Observable<Iproduct[]> {

        return  this._http.get(this._productUrl).map((response : Response) => 
        <Iproduct[]>response.json()).do(data => console.log('All:' + JSON.stringify(data)))
        .catch(this.handleError);
    }
    getProducts(id: number): Observable<Iproduct> {
        return this.getProduct()
            .map((products: Iproduct[]) => products.find(p => p.productId === id));
    }

    private handleError(error : Response){

        console.error(error);
        return Observable.throw(error.json().error || 'Server Eror');
    


    }
 } 