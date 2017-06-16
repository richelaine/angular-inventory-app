import { Component, Input, HostBinding } from '@angular/core';
import { Product } from '../product/product.model';

@Component(
  {
    selector: 'product-row',
    templateUrl: './product-row.component.html',
    // styleUrls: ['./product-row.component.css']
  })

export class ProductRowComponent 
{
  //  @ProductRow: A component for the view of single Product

  @Input() product: Product;

  @HostBinding('attr.class') cssClass = 'item';   // @HostBinding - it lets us 'sets attributes on the host element.'  
                                                  // The 'host' is the element this component is attached to.
  constructor() { }

  ngOnInit() 
  {
  }

}
