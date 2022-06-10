import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { RateService } from './shared/services/loadRatesService';
import { AppState } from './state/app.state';
import { selectAll, selectEUR, selectUAH, selectUSD } from './state/selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  USD$ = this.store.select(selectUSD);
  EUR$ = this.store.select(selectEUR);
  UAH$ = this.store.select(selectUAH);
  currencies$ = this.store.select(selectAll);

  constructor(
    private store: Store<AppState>,
    private rateService: RateService
  ) {}

  ngOnInit() {
    this.rateService.loadAllCurrencies();
  }
}
