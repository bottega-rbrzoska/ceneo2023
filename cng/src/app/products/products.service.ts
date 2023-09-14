import { Injectable } from '@angular/core';
import { Product } from 'src/models/Product';

@Injectable()
export class ProductsService {

  private _products: Product[] = [
    {
      id: '1',
      name: 'Dehydrated water',
      category: 'cat1',
      description:
        'Bacon ipsum dolor sit amet cow brisket leberkas, pork tongue meatloaf pastrami corned beef meatball shoulder andouille shankle sausage beef. Turkey tail rump turducken shoulder spare ribs swine strip steak boudin ham ball tip brisket t-bone leberkas. Bresaola ham bacon landjaeger. Ground round doner tri-tip ham hock meatball. Bacon spare ribs flank salami rump, biltong landjaeger pork jerky. Tongue prosciutto porchetta, leberkas shankle filet mignon spare ribs pork jerky meatloaf beef ribs andouille bresaola swine. Spare ribs kielbasa pork chop sirloin boudin.',
      price: 29.99
    },
    {
      id: '2',
      name: 'Non-alcoholic vodka',
      category: 'cat1',
      description:
        'Salami beef bacon meatloaf rump beef ribs porchetta shankle boudin fatback tri-tip ribeye pig corned beef pastrami. Pork chop tongue pork loin swine chicken. Andouille jowl tail tongue, ham shank meatball filet mignon flank short ribs chuck landjaeger shankle t-bone. Kielbasa biltong hamburger brisket swine. Ball tip chicken pork prosciutto. Flank spare ribs pork belly frankfurter cow pork landjaeger andouille. Turkey short loin spare ribs sirloin, chicken pork loin flank kevin.',
      price: 19.95
    },
    {
      id: '3',
      name: 'Fresh air in a jar',
      category: 'cat1',
      description:
        'Prosciutto beef ribs pastrami, boudin beef biltong fatback cow. Rump tri-tip leberkas pork loin, pork chop ground round porchetta kielbasa biltong filet mignon swine ribeye corned beef beef. Short loin chicken shankle flank kielbasa. Porchetta beef ribs tongue, filet mignon pork chop hamburger pastrami kielbasa ham bacon brisket pig frankfurter shoulder. Pancetta prosciutto shankle fatback, chuck tri-tip ball tip t-bone turducken cow tail pastrami ground round pork chop short ribs.',
      price: 190
    }
  ]
 
  constructor() { }

  getProducts() {
    return this._products;
  }
}
