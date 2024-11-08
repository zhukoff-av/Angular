import {Component, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {AsyncPipe, NgForOf, NgIf, TitleCasePipe} from '@angular/common';
import {ProductComponent} from './components/product/product/product.component';
import {IProduct} from './models/product'
import {ProductService} from './services/product.services';
import {finalize, Observable, tap} from 'rxjs';
import {ErrorComponent} from './components/error/error.component';
import {FormsModule} from '@angular/forms';
import {FilterProductsPipe} from './pipes/filter-products.pipe';
import {ModalComponent} from './components/modal/modal.component';
import {CreateProductComponent} from './components/create-product/create-product.component';
import {ModalService} from './services/modal.service';
import {NavigationComponent} from './components/navigation/navigation.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TitleCasePipe, ProductComponent, NgForOf, NgIf, AsyncPipe, ErrorComponent, FormsModule, FilterProductsPipe,
    ModalComponent, CreateProductComponent, NavigationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {


}
