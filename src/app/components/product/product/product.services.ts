import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpResponse} from '@angular/common/http';
import {catchError, delay, Observable, retry, throwError} from 'rxjs';
import {IProduct} from '../../../models/product';
import {ErrorService} from '../../../services/error.service';

@Injectable({
  providedIn: 'root' // This is the default value, but it is included here for clarity
})
export class ProductService {
  private url: string;

  constructor(
    private http: HttpClient,
    private errorService: ErrorService) {
  }

  getAll(): Observable<IProduct[]> {
    const apiUrl = 'https://fakestoreapi.com/products';
    return this.http.get<IProduct[]>(apiUrl, {
      params: {
        limit: '5'
      }
    }).pipe(
      delay(100),
      retry(3),
      catchError(this.errorHandler.bind(this)));
  }

  // DEBUG
  // return this.http.get<IProduct[]>(apiUrl).pipe(
  //   map((products) => products.map(product => ({
  //     ...product,
  //     name: product.title || '' // Default to empty string if name is missing
  //   })))
  // );
  private errorHandler(error: HttpErrorResponse) {
    this.errorService.handle(error.message);
    return throwError(() => new Error(error.message || 'Server Error'));
  }
}


