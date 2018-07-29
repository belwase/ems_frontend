import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-payment-add',
  templateUrl: './payment-add.component.html',
  styleUrls: ['./payment-add.component.css']
})
export class PaymentAddComponent implements OnInit {
	payment = {user:{}} ;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  	}
savePayment(){
    this.http.post('http://192.168.1.87/payment/', this.payment).subscribe(res => {
          let id = res['id'];
          this.router.navigate(['/payment-add', id]);
        }, (err) => {
          console.log(err);
        }
      );
  }

}
