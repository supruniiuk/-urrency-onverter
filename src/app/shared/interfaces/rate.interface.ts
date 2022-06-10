export interface Rate {
  currency: RateAmount;
}

export interface RateAmount {
  rate: number;
  rate_for_amount: number;
}
