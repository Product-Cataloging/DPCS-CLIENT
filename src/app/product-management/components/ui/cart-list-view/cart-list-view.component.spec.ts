import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartListViewComponent } from './cart-list-view.component';

describe('CartListViewComponent', () => {
  let component: CartListViewComponent;
  let fixture: ComponentFixture<CartListViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartListViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
