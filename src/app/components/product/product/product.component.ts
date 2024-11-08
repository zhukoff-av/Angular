import {Component, Input, OnInit} from '@angular/core';
import {IProduct} from '../../../models/product';
import {CurrencyPipe, DecimalPipe, NgClass, NgIf, NgStyle} from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    CurrencyPipe,
    NgIf,
    NgClass,
    NgStyle,
    DecimalPipe
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit {
  @Input() product: IProduct

  details: boolean

  ngOnInit(): void {

  }
}
