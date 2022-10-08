import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Observable } from 'rxjs';
import { Menu } from 'src/app/main/models/menu.model';
import { MenuQuery } from 'src/app/main/state/menu/menu.query';
import { MenuService } from 'src/app/main/state/menu/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  
  @Input() items: MenuItem[] | null= [];
  
  constructor() {
               
  }

  ngOnInit(): void {

  }
}
