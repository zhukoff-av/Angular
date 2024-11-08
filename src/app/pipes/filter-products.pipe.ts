import {Pipe, PipeTransform} from '@angular/core';
import {IProduct} from '../models/product';

@Pipe({
  name: 'filterProducts',
  standalone: true
})
export class FilterProductsPipe implements PipeTransform {

  transform(products: IProduct[], search: string): IProduct[] {
    if(!search) return products
    return products.filter(p => p.title.toLowerCase().includes(search));
  }

}
