import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { HeaderComponent } from './components/ui/header/header.component';
import { FooterComponent } from './components/ui/footer/footer.component';
import { LayoutComponent } from './components/container/layout/layout.component';
import { MenuComponent } from './components/container/menu/menu.component';
import { AppCommonModule } from '../app.common.module';
import { SearchComponent } from './components/ui/search/search.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    MenuComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    AppCommonModule
  ]
})
export class MainModule { }
