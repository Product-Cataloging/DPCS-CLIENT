import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { tap } from 'rxjs/operators';
import { Menu } from '../../models/menu.model';
import { MenuStore } from './menu.store';

@Injectable({ providedIn: 'root' })
export class MenuService {

  constructor(private menuStore: MenuStore, private http: HttpClient) {
  }


  get() {
    return this.http.get<Menu[]>('https://api.com').pipe(tap(entities => {
      this.menuStore.set(entities);
    }));
  }

  add(menu: Menu) {
    this.menuStore.add(menu);
  }

  update(id:any, menu: Partial<Menu>) {
    this.menuStore.update(id, menu);
  }

  remove(id: ID) {
    this.menuStore.remove(id);
  }

}
