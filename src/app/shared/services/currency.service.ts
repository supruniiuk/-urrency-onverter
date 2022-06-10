import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Currency } from '../interfaces/currency.interface';
import { RequestService } from './requests.service';

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  constructor(private requestService: RequestService) {}

  getAllGames(): Observable<Currency> {
    return this.requestService.get<Currency>(`&from=EUR`);
  }
}
