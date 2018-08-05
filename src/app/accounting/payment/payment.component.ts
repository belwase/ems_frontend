import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: []
})
export class PaymentComponent implements OnInit {

 	payments : any;

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  	 this.getPayment(this.route.snapshot.params['id']);
  	 }
 getPayment(id) {
    this.http.get('http://192.168.1.77:8001/payment/').subscribe(data => {
      this.payments = data;
     });
  }

updatePayment() {
  var payments = this.payments;
  	console.log('updating..', this.payments)
    this.http.put('http://192.168.1.77:8001/payment/'+this.payments.id+'/', this.payments)
      .subscribe(res => {
          alert('updated')
        }, (err) => {
          console.log(err);
        }
      );
  }

}