import { ProductListComponet } from "./product-list.component";
import { ProductFilterPipe } from "./product.filter.pipe";
import { StarComponent } from "../shared/star.component";
import { ProductDetails } from "./product-details.component";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ProductGuard } from "./product-guard-service";
import { ProductService } from "./product.service";
import { SharedModule } from "../shared/shared.module";

@NgModule({
    declarations: [
      ProductListComponet,
      ProductFilterPipe,ProductDetails,
      
    ],
    imports: [
      SharedModule,
      RouterModule.forChild([
        { path : 'products', component : ProductListComponet },
        { path : 'product/:id', canActivate :[ProductGuard] ,component : ProductDetails },
       
      ])
    ],
    providers: [ProductService,ProductGuard],
    
  })
  export class ProductModule { }
  