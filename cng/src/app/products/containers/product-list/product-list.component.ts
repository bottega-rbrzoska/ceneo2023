import { Component } from '@angular/core';
import { Product } from 'src/models/Product';
import { ProductsService } from '../../products.service';
import { Observable } from 'rxjs';
import { NotificationsService } from 'src/app/shared/notifications/notifications.service';
import { ProductItemComponent } from '../../components/product-item/product-item.component';
import { NgFor, AsyncPipe } from '@angular/common';
import { PermissionsDirective } from '../../../shared/directives/permissions.directive';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.scss'],
    standalone: true,
    imports: [RouterLink, PermissionsDirective, NgFor, ProductItemComponent, AsyncPipe]
})
export class ProductListComponent {

  products$: Observable<Product[] | null>;

  constructor(productsService: ProductsService, notifications: NotificationsService){
    this.products$ = productsService.products$;
    productsService.fetchProducts();
  }

}
