import { Component } from '@angular/core';
import { Product } from 'src/models/Product';
import { ProductsService } from '../../products.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {

  products$: Observable<Product[] | null>;

  constructor(productsService: ProductsService){
    this.products$ = productsService.products$;
    productsService.fetchProducts();
  }

}
