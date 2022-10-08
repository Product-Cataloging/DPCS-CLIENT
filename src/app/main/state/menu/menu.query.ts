import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { MenuItem } from 'primeng/api';
import { map, Observable } from 'rxjs';
import { Menu } from '../../models/menu.model';
import { MenuStore, MenuState } from './menu.store';

@Injectable({ providedIn: 'root' })
export class MenuQuery extends QueryEntity<MenuState> {

  constructor(protected override store: MenuStore) {
    super(store);
  }
  transformMenu(menus: Menu[] | undefined) {
    const items: any[] = [];
    if (menus && menus.length > 0) {
      menus.forEach((menu) => {
        const m: any = {};
        m['label'] = menu.name;
        if (menu.children && menu.children.length > 0) {
          const children: any[] = [];
          menu.children.forEach((child: {'id':string,'name':string }) => {
            children.push({
              label: child.name,
              routerLink: '/categories'+child.id,
              routerLinkActiveOptions: { exact: true}
            });
          });
          m['items'] = children;
        }
        items.push(m);
      });
    }
    return items;
  }
  selectMenuItems(): Observable<MenuItem[]>{
    return this.selectAll().pipe(
      map((items: any) => this.transformMenu(items))
    );
  }

  

}
