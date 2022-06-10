import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Currency } from '../interfaces/currency.interface';
import { RequestService } from './requests.service';

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  constructor(private requestService: RequestService) {}

  getAll(currency: string): Observable<Currency> {
    return this.requestService.get<Currency>(`&from=${currency}`);
  }
}
