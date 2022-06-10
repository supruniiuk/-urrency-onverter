import { createAction, props } from '@ngrx/store';
import { Rate } from '../shared/interfaces/rate.interface';

export const setCurrency = createAction(
  '[ Rate/API ] Set Currency',
  props<{ rate: Rate; currency: string }>()
);
