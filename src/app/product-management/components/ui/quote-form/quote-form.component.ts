import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.scss'],
})
export class QuoteFormComponent implements OnInit {
  @Output() requestClick = new EventEmitter<any>();
  toast:boolean = true;
  constructor() {}
  form = new FormGroup({
    firstName: new FormControl('',Validators.required),
    lastName: new FormControl('',Validators.required),
    email: new FormControl('',[Validators.required,Validators.email]),
    phoneNumber: new FormControl('',[Validators.required]),
    productName: new FormControl('',Validators.required),
    productDescription: new FormControl('',Validators.required),
    quantity:new FormControl('',Validators.required),
    imageUrl: new FormControl('',Validators.required),
  });
  ngOnInit(): void {}

  get email() { return this.form.get('email'); }
  onRequestQuoteClick() {
    this.requestClick.emit(this.form.value);
    this.form.reset();
    this.toast = false;
  }

}
