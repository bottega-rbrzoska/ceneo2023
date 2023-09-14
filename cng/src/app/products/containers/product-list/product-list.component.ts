import { Component } from '@angular/core';
import { Product } from 'src/models/Product';
import { ProductsService } from '../../products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {

  products: Product[];

  constructor(productsService: ProductsService){
    this.products = productsService.getProducts()
  }

}
