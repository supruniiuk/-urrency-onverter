import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AmountForm } from 'src/app/components/converter/converter.component';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  amount: FormGroup;

  @Input() value: AmountForm;
  @Output() currency: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    this.amount = new FormGroup({
      amount: new FormControl(this.value.amount),
      currency: new FormControl(this.value.currency),
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.amount) {
      this.setFormValue();
    }
  }

  setFormValue() {
    if (Number.isNaN(this.value.amount)) {
      this.amount.controls['amount'].setValue(0);
    } else {
      this.amount.controls['amount'].setValue(this.value.amount);
    }
    this.amount.controls['currency'].setValue(this.value.currency);
  }

  convert(): void {
    this.currency.emit(this.amount.value);
  }
}
