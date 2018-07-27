import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-payment-edit',
  templateUrl: './payment-edit.component.html',
  styleUrls: ['./payment-edit.component.css']
})
export class PaymentEditComponent implements OnInit {
		payment : {user:{}};

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  	 this.getPayment(this.route.snapshot.params['id']);
  	 }
 getPayment(id) {
    this.http.get('http://192.168.1.77/payment/'+id).subscribe(data => {
      this.payment = data;
     });
  }

updatePayment() {
  var payment = this.payment;
  	console.log('updating..', this.payment)
    this.http.put('http://192.168.1.77/payment/'+this.payment.id+'/', this.payment)
      .subscribe(res => {
          alert('updated')
        }, (err) => {
          console.log(err);
        }
      );
  }

}
