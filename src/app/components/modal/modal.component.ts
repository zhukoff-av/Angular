import {Component, Input, OnInit} from '@angular/core';
import {NgIf, TitleCasePipe} from '@angular/common';
import {ModalService} from '../../services/modal.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [
    NgIf,
    TitleCasePipe
  ],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent implements OnInit {

  constructor(public modalService: ModalService) {
  }

  @Input() title: string
  // @Output() close = new EventEmitter<void>()

  isVisible = false;
  private subscription: Subscription;

  ngOnInit(): void {
    this.subscription = this.modalService.isVisible$.subscribe(isVisible => {
      this.isVisible = isVisible;
    });
  }

  openModal() {
    this.isVisible = true;
  }

  onClose() {
    this.modalService.close(); // Ensures modal is hidden
  }


}
