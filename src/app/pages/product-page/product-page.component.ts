import { Component } from '@angular/core';
import {CreateProductComponent} from "../../components/create-product/create-product.component";
import {FilterProductsPipe} from "../../pipes/filter-products.pipe";
import {FormsModule} from "@angular/forms";
import {ModalComponent} from "../../components/modal/modal.component";
import {NgForOf, NgIf, TitleCasePipe} from "@angular/common";
import {ProductComponent} from "../../components/product/product/product.component";
import {Observable} from 'rxjs';
import {IProduct} from '../../models/product';
import {ProductService} from '../../services/product.services';
import {ModalService} from '../../services/modal.service';

@Component({
  selector: 'app-product-page',
  standalone: true,
    imports: [
        CreateProductComponent,
        FilterProductsPipe,
        FormsModule,
        ModalComponent,
        NgForOf,
        NgIf,
        ProductComponent,
        TitleCasePipe
    ],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.scss'
})
export class ProductPageComponent {
  title = 'angular-crash-project';
  $products: Observable<IProduct[]>;
  loading = false;
  term: '';

  constructor(
    public productService: ProductService,
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

    // this.$products = this.productService.getAll()
    //   .pipe(
    //     tap(() => this.loading = false
    //     ));

    this.productService.getAll().subscribe(() => {
      this.loading = false;
    })
  }
}
