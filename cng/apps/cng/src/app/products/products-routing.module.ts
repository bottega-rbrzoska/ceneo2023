import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './containers/product-list/product-list.component';
import { ProductEditComponent } from './containers/product-edit/product-edit.component';
import { ProductAddComponent } from './containers/product-add/product-add.component';

const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: ':id/edit', component: ProductEditComponent },
  { path: 'add', component: ProductAddComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
