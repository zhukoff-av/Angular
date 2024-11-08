import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {NgIf} from '@angular/common';
import {FocusDirective} from '../../directives/focus.directive';
import {ProductService} from '../../services/product.services';
import {ModalService} from '../../services/modal.service';

@Component({
  selector: 'app-create-product',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf,
    FocusDirective
  ],
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.scss'
})
export class CreateProductComponent implements OnInit {

  constructor(
    private productService: ProductService,
    private modalService: ModalService) {
  }

  form = new FormGroup({
    title: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(4),
    ]),
  })

  get title() {
    return this.form.controls.title as FormControl
  }


  ngOnInit(): void {
    // Initialization logic here
  }

  submit() {
    console.log(this.form.value)
    this.productService.create({
      title: this.form.value.title as string,
      price: 13.5,
      description: 'lorem ipsum set',
      image: 'https://i.pravatar.cc',
      rating: {
        rate: 4.5,
        count: 10
      }
    }).subscribe(() => {
      this.modalService.close()
    })
  };
}
