import { Component } from '@angular/core';
import { NotificationsService } from 'src/app/shared/notifications/notifications.service';
import { Product } from 'src/models/Product';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent {

  constructor(private _nbotificationsService: NotificationsService) {}
  handleSave(product: Partial<Product>){
    console.log('Save', product)
    this._nbotificationsService.pushNotification({
      message: 'Saved!',
      msgType: 'success'
    })
  }
}
