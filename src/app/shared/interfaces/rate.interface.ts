export interface Rate {
  [name: string]: RateAmount;
}

export interface RateAmount {
  rate: number;
  rate_for_amount: number;
}
