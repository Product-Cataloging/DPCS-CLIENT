import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { QuoteStore, QuoteState } from './quote.store';

@Injectable({ providedIn: 'root' })
export class QuoteQuery extends QueryEntity<QuoteState> {

  constructor(protected override store: QuoteStore) {
    super(store);
  }

}
