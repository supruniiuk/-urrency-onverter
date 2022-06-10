import { Rate } from './rate.interface';

export interface Currency {
  base_currency_code: string;
  amount: number;
  rates: Rate;
}
