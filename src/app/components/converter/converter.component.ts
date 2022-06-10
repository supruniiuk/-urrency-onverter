import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Currency } from 'src/app/shared/interfaces/currency.interface';
import { CurrencyState } from 'src/app/state/reducer';
import icon from '../../../assets/svg/exchange-icon';

export interface AmountForm {
  amount: number;
  currency: string;
}

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss'],
})
export class ConverterComponent implements OnInit {
  exchangeIcon: SafeHtml;

  currenciesArr: Currency[] = [];

  @Input() state: CurrencyState | null;

  from: AmountForm = {
    amount: 1,
    currency: 'UAH',
  };
  to: AmountForm = {
    currency: 'USD',
    amount: 0,
  };

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.convertFromTo();

    this.exchangeIcon = this.sanitizer.bypassSecurityTrustHtml(icon);
  }

  setFrom(value: any) {
    this.from = value;
    this.convertFromTo();
  }

  setTo(value: any) {
    this.to = value;
    this.convertToFrom();
  }

  convertFromTo() {
    if (this.state != null) {
      const fromCurrency = this.from.currency;
      const toCurrency = this.to.currency;
      const rate = +this.state[fromCurrency][toCurrency].rate;
      const amount = +(this.from.amount * rate).toFixed(2);
      this.to = { amount, currency: this.to.currency };
    }
  }

  convertToFrom() {
    if (this.state != null) {
      const fromCurrency = this.from.currency;
      const toCurrency = this.to.currency;
      const rate = +this.state[toCurrency][fromCurrency].rate_for_amount;
      const amount = +(this.to.amount / rate).toFixed(2);

      this.from = {
        amount,
        currency: this.from.currency,
      };
    }
  }

  switch() {
    const temp = this.from.currency;
    this.from = { ...this.from, currency: this.to.currency };
    this.to = { ...this.to, currency: temp };
    this.convertFromTo();
  }
}
