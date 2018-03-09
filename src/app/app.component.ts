import { Component } from '@angular/core';
import { ProductService } from './product/product.service';

@Component({
  selector: 'pm-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers : [ProductService]
})
export class AppComponent {
  pageTitle: string = 'Acme Product Management';
}
 