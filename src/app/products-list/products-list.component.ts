import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../product/product.model';

// @ProductList: A component for rendering  all ProductRows and storing the currently selected Product
@Component(
  {
    selector: 'products-list',
    templateUrl: './products-list.component.html',
    // styleUrls: ['./products-list.component.css']
  })

export class ProductsListComponent 
{
  // @Input productList - the Product[] passed to us
  // Component Inputs - specify the parameters we expect our component to receive.
  // the Property Name (poductList) - represents how the incoming property will be 'visible ("bound") in the controller.'
  // the @Input() argument - configures how the property is 'visible to the "outside world"'. 
  @Input() productList: Product[];

  // @Output onProductSelected - outputs the current Product whenever a new Product is selected
  @Output() onProductSelected: EventEmitter<Product>;

  // @property currentProduct - local state containing the currently selected 'Product'. a.k.a "local component state".
  // current Product is a property internal to ProductsListComponent
  private currentProduct: Product;

  constructor() 
  { 
    this.onProductSelected = new EventEmitter();
  }

  ngOnInit() 
  {
  }

  clicked(product: Product): void
  {
    this.currentProduct = product;  // Set 'this.currentProduct' to the 'Product' that was passed in. 
    this.onProductSelected.emit(product);   // Emit the 'Product' that was clicked on our output
  }

  isSelected(product: Product): boolean
  {
    if (!product || !this.currentProduct)
    {
      return false;
    }

    return product.sku === this.currentProduct.sku;

    // This function accepts a Product and returns true if product's sku matches the currentProduct's sku.
    // It returns false otherwise.
  }
}