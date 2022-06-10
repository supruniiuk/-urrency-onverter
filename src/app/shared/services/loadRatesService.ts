import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { setCurrency } from 'src/app/state/actions';
import { Currency } from '../interfaces/currency.interface';
import { CurrencyService } from './currency.service';

@Injectable({
  providedIn: 'root',
})
export class RateService {
  subs: Subscription[] = [];

  constructor(private currencyService: CurrencyService, private store: Store) {}

  loadAllCurrencies(): void {
    this.loadOne('EUR');
    this.loadOne('UAH');
    this.loadOne('USD');
  }

  loadOne(currency: string): void {
    const sub = this.currencyService
      .getAll(currency)
      .subscribe((res: Currency) => {
        this.store.dispatch(setCurrency({ rate: res.rates, currency }));
      });

    this.subs.push(sub);
  }

  unsubscribe() {
    this.subs.forEach((sub) => sub.unsubscribe());
  }
}
