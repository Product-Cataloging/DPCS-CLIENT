import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Menu } from '../../models/menu.model';
import { MenuStore } from './menu.store';

@Injectable({ providedIn: 'root' })
export class MenuService {

  constructor(private menuStore: MenuStore, private http: HttpClient) {
  }


  get() {
    const url =`${environment.apiUrl}/category`;
    return this.http.get(url).pipe(
      tap({next: (response: any) => {
        if (response.success) {      
          this.menuStore.set(response.data);
        } else {
          console.log(response.error)
       }
      }, error: (err) => console.log(err)
       })
    )
  }

  
}
