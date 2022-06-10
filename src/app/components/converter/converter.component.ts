import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Currency } from 'src/app/shared/interfaces/currency.interface';
import icon from "../../../assets/svg/exchange-icon";

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss']
})
export class ConverterComponent implements OnInit {
  exchangeIcon: SafeHtml;
  currencies = ['UAH', 'EUR', 'USD'];

  currenciesArr: Currency[] = [];

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.exchangeIcon = this.sanitizer.bypassSecurityTrustHtml(icon);
  }

}
