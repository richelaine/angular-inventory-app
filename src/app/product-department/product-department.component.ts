import { Component, Input } from '@angular/core';
import { Product } from '../product/product.model';

@Component(
  {
    selector: 'product-department',
    templateUrl: './product-department.component.html'
  })

export class ProductDepartmentComponent 
{
  @Input() product: Product;

  constructor() { }

  ngOnInit() { }
}