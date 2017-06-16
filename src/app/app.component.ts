import { Component, EventEmitter } from '@angular/core';
import { Product } from './product/product.model'; // import Product so that we can use it

@Component( // <-- Decorator - it adds metadata to the class that follows it (AppComponent).
  {
    selector: 'inventory-app-root', // tells Angular what element to match
    templateUrl: './app.component.html', // template - defines the view
    // styleUrls: ['./app.component.css']
  })

export class AppComponent 
{
  products: Product[];

  constructor()
  {
    this.products = 
    [
      new Product
      (
        'MYSHOES',
        'Black Running Shoes',
        '/assets/images/products/black-shoes.jpg',
        ['Men', 'Shoes', 'Running Shoes'],
        109.99
      ),

      new Product
      (
        'NEATOJACKET',
        'Blue Jacket',
        '/assets/images/products/blue-jacket.jpg',
        ['Women', 'Apparel', 'Jackets & Vests'],
        238.99
      ),

      new Product
      (
        'NICEHAT',
        'A Nice Black Hat',
        '/assets/images/products/black-hat.jpg',
        ['Men', 'Accessories', 'Hat'],
        29.99
      )
    ]
  }

  productWasSelected( product: Product): void
  {
    console.log( 'Product clicked: ', product);

    // this function accepts a single argument 'product' and then it will log out that the product was passed in.
  }
}