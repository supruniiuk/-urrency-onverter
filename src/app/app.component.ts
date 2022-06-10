import { Component, OnInit } from '@angular/core';
import { CurrencyService } from './shared/services/currency.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'currency-converter';

  constructor(private currencyService: CurrencyService){}

  ngOnInit() {
    this.currencyService.getAllGames().subscribe(res => {
      console.log(res.rates)
    })
  }
}
