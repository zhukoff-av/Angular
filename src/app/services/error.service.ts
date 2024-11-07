import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  error$ = new Subject<string>();

  handle(message: string) {
    this.error$.next('An unexpected error occurred');
  }

  clear() {
    this.error$.next('');
  }


  constructor() {
  }
}
