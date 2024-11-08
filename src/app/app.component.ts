import {Component, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {AsyncPipe, NgForOf, NgIf, TitleCasePipe} from '@angular/common';
import {ProductComponent} from './components/product/product/product.component';
import {IProduct} from './models/product'
import {ProductService} from './components/product/product/product.services';
import {finalize, Observable, tap} from 'rxjs';
import {ErrorComponent} from './components/error/error.component';
import {FormsModule} from '@angular/forms';
import {FilterProductsPipe} from './pipes/filter-products.pipe';
import {ModalComponent} from './components/modal/modal.component';
import {CreateProductComponent} from './components/create-product/create-product.component';
import {ModalService} from './services/modal.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TitleCasePipe, ProductComponent, NgForOf, NgIf, AsyncPipe, ErrorComponent, FormsModule, FilterProductsPipe,
    ModalComponent, CreateProductComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements OnInit {
  title = 'angular-crash-project';
  $products: Observable<IProduct[]>;
  loading = false;
  term: '';

  constructor(
    private productService: ProductService,
    public modalService: ModalService) {
  }

  isModalVisible = false;

  openModal() {
    this.modalService.open()
  }

  closeModal() {
    this.modalService.close()
  }

  ngOnInit(): void {
    this.loading = true;

    this.$products = this.productService.getAll().pipe(
      finalize(() => this.loading = false
      ));

    // this.productService.getAll().subscribe((products: IProduct[]) => {
    //   this.products = products
    //   this.loading = false;
    //
    //   // DEBUG
    //   // this.products = products.map((product) => {
    //   //   return {
    //   //     ...product,
    //   //     name: product.title ? product.title.toLowerCase() : ''
    //   //   };
    //   // });
    // });
  }
}
