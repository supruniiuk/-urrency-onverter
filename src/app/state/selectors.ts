import { AppState } from './app.state';

export const selectEUR = (state: AppState) => state.currencies.EUR;

export const selectUSD = (state: AppState) => state.currencies.USD;

export const selectUAH = (state: AppState) => state.currencies.UAH;

export const selectAll = (state: AppState) => state.currencies;
