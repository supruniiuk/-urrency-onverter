import { createReducer, on } from '@ngrx/store';
import { Rate, RateAmount } from '../shared/interfaces/rate.interface';
import { setCurrency } from './actions';

export interface CurrencyState {
  [key: string]: Rate;
}

export const initialState: CurrencyState = {};

export const currencyReducer = createReducer(
  initialState,
  on(setCurrency, (state, { rate, currency }) => ({
    ...state,
    [currency]: rate,
  }))
);
