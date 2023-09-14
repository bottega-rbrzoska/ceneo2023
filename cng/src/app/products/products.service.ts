import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from 'src/models/Product';

@Injectable()
export class ProductsService {

  private _productsSubj = new BehaviorSubject<Product[] | null>(null);
  products$ = this._productsSubj.asObservable();
 
  constructor( private http: HttpClient) { }

  fetchProducts() {
    return this.http.get<Product[]>('http://localhost:3000/products').subscribe(p => this._productsSubj.next(p));
  }
}
