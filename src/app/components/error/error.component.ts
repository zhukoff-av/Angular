import {Component, OnInit} from '@angular/core';
import {ErrorService} from '../../services/error.service';
import {AsyncPipe, NgIf} from '@angular/common';

@Component({
  selector: 'app-error',
  standalone: true,
  imports: [
    AsyncPipe,
    NgIf
  ],
  templateUrl: './error.component.html',
  styleUrl: './error.component.scss'
})
export class ErrorComponent implements OnInit {
  errorMessage: string;

  constructor(public errorService: ErrorService) {
  }

  ngOnInit(): void {
    this.errorService.error$.subscribe(message => {
      this.errorMessage = message;
    });
  }

}
