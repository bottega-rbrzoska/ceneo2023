import { Component } from '@angular/core';
import { Product } from 'src/models/Product';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent {

  handleSave(product: Partial<Product>){
    console.log('Save', product)
  }
}
