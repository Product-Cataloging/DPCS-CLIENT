import { Component, OnInit } from '@angular/core';
import { QuoteService } from 'src/app/product-management/state/quote.service';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent implements OnInit {

  constructor(private service: QuoteService) { }

  ngOnInit(): void {
  }
  onRequestQuoteClick(event:any){   
    this.service.add({payload:{
    first_name:event.firstName,
    last_name:event.lastName,
    email:event.email,
    description:event.productDescription,
    image_url:event.imageUrl,
    phone_number:event.phoneNumber,
    product_name:event.productName}}).subscribe();
    
    
  }
}
