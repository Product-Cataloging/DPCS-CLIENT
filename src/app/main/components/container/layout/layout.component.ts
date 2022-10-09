import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Observable } from 'rxjs';
import { MenuQuery } from 'src/app/main/state/menu/menu.query';
import { MenuService } from 'src/app/main/state/menu/menu.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  menus$:Observable<MenuItem[]> = this.query.selectMenuItems();
  constructor(private query:MenuQuery,
    private service:MenuService) { 
    this.service.get().subscribe();
  }

  ngOnInit(): void {
  }

 
}
