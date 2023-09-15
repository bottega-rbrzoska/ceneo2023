import { Component, Input } from '@angular/core';
import { Product } from 'src/models/Product';
import { VatPipe } from '../../../shared/directives/vat.pipe';
import { NgClass, CurrencyPipe } from '@angular/common';

@Component({
    selector: 'app-product-item',
    templateUrl: './product-item.component.html',
    styleUrls: ['./product-item.component.scss'],
    standalone: true,
    imports: [NgClass, CurrencyPipe, VatPipe]
})
export class ProductItemComponent {
  @Input() product!: Product;
}
