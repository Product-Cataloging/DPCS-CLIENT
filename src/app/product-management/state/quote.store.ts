import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Quote } from './../models/quote.model';

export interface QuoteState extends EntityState<Quote> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'quote' })
export class QuoteStore extends EntityStore<QuoteState> {

  constructor() {
    super();
  }

}
