import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { MenuItem } from 'primeng/api';
import { Menu } from '../../models/menu.model';

export interface MenuState extends EntityState<MenuItem> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'menu' })
export class MenuStore extends EntityStore<MenuState> {

  constructor() {
    super();
  }
  

}
