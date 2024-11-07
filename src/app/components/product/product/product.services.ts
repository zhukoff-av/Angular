import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {IProduct} from '../../../models/product';

@Injectable({
  providedIn: 'root' // This is the default value, but it is included here for clarity
})
export class ProductService {
  private url: string;

  constructor(private http: HttpClient) {

  }

  getAll(): Observable<IProduct[]> {
    const apiUrl = 'https://fakestoreapi.com/products';
    return this.http.get<IProduct[]>(apiUrl, {
      params: {
        limit: '5'
      }
    })

    // DEBUG
    // return this.http.get<IProduct[]>(apiUrl).pipe(
    //   map((products) => products.map(product => ({
    //     ...product,
    //     name: product.title || '' // Default to empty string if name is missing
    //   })))
    // );
  }
}


