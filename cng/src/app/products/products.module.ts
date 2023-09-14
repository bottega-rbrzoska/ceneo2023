import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './containers/product-list/product-list.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { ProductAddComponent } from './containers/product-add/product-add.component';
import { ProductEditComponent } from './containers/product-edit/product-edit.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ProductsRoutingModule } from './products-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ProductListComponent,
    ProductItemComponent,
    ProductAddComponent,
    ProductEditComponent,
    ProductFormComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule
  ]
})
export class ProductsModule { }
