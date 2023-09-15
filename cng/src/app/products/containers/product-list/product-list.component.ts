import { Component } from '@angular/core';
import { Product } from 'src/models/Product';
import { ProductsService } from '../../products.service';
import { Observable } from 'rxjs';
import { NotificationsService } from 'src/app/shared/notifications/notifications.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {

  products$: Observable<Product[] | null>;

  constructor(productsService: ProductsService, notifications: NotificationsService){
    this.products$ = productsService.products$;
    productsService.fetchProducts();
  }

}
