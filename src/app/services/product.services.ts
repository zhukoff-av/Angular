import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpParams, HttpResponse} from '@angular/common/http';
import {catchError, delay, Observable, retry, tap, throwError} from 'rxjs';
import {IProduct} from '../models/product';
import {ErrorService} from './error.service';

@Injectable({
  providedIn: 'root' // This is the default value, but it is included here for clarity
})
export class ProductService {
  products: IProduct[] = []

  constructor(
    private http: HttpClient,
    private errorService: ErrorService) {
  }

  product: IProduct[] = [];

  getAll(): Observable<IProduct[]> {
    const apiUrl = 'https://fakestoreapi.com/products';
    return this.http.get<IProduct[]>(apiUrl, {
      params: new HttpParams(
        {
          fromObject: {limit: 6}
        }
      )
    }).pipe(
      delay(1000),
      retry(3),
      tap(products => this.products = products),
      catchError(this.errorHandler.bind(this)));
  }

  create(product: IProduct): Observable<IProduct> {
    const apiUrl = 'https://fakestoreapi.com/products';
    return this.http.post<IProduct>(apiUrl, product)
      .pipe(
        tap(product => this.products.push(product)),
        catchError(this.errorHandler.bind(this)));
  }

  private errorHandler(error: HttpErrorResponse) {
    this.errorService.handle(error.message);
    return throwError(() => new Error(error.message || 'Server Error'));
  }
}


