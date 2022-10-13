import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Quote } from '../models/quote.model';
import { QuoteStore } from './quote.store';

@Injectable({ providedIn: 'root' })
export class QuoteService {

  constructor(private quoteStore: QuoteStore, private http: HttpClient) {
  }


  get() {
    return this.http.get<Quote[]>('https://api.com').pipe(tap(entities => {
      this.quoteStore.set(entities);
    }));
  }

  add(quote: any) {
    const url =`${environment.apiUrl}/quotation_requests`;   
    return this.http.post(url,quote).pipe(
      tap({next: (response: any) => {
        if (response.success) {   
        } else {
          console.log(response.error)
       }
      }, error: (err) => console.log(err)
       })
    )
  }

  update(id:any, quote: Partial<Quote>) {
    this.quoteStore.update(id, quote);
  }

  remove(id: ID) {
    this.quoteStore.remove(id);
  }

}
