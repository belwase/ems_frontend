import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-payment-list',
  templateUrl: './payment-list.component.html',
  styleUrls: ['./payment-list.component.css']
})
export class PaymentListComponent implements OnInit {

  payments: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
  this.http.get('http://192.168.1.77/payment/').subscribe(data => {
      console.log('data :: ')
      console.log(data)
      this.payments = data;
    });
  }

}
