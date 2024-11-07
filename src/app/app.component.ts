import {Component, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {NgForOf, NgIf, TitleCasePipe} from '@angular/common';
import {ProductComponent} from './components/product/product/product.component';
import {IProduct} from './models/product'
import {products as data} from './data/products';
import {ProductService} from './components/product/product/product.services';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TitleCasePipe, ProductComponent, NgForOf, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements OnInit {
  title = 'angular-crash-project';
  products: IProduct[] = [];
  loading = false;

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.loading = true;
    this.productService.getAll().subscribe((products: IProduct[]) => {
      this.products = products
      this.loading = false;
      // DEBUG
      // this.products = products.map((product) => {
      //   return {
      //     ...product,
      //     name: product.title ? product.title.toLowerCase() : ''
      //   };
      // });
    });
  }
}
