import { Component, Input, HostBinding } from '@angular/core';
import { Product } from '../product/product.model';

@Component(
  {
    selector: 'product-image',
    template: ` <img class="product-image" [src]="product.imageUrl"> `
                // or  ` <img src=" {{ product.imageUrl }} ">
  })

export class ProductImageComponent 
{
  @Input() product: Product;
  @HostBinding('attr.class') cssClass='ui small image';

  constructor() { }

  ngOnInit() { }
}