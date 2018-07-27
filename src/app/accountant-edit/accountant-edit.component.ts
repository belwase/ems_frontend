import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-accountant-edit',
  templateUrl: './accountant-edit.component.html',
  styleUrls: ['./accountant-edit.component.css']
})
export class AccountantEditComponent implements OnInit {
		accountant : {user:{}};

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  	 this.getAccountant(this.route.snapshot.params['id']);
  	 }
 getAccountant(id) {
    this.http.get('http://192.168.1.77/accountant/'+id).subscribe(data => {
      this.accountant = data;
     });
  }

updateAccountant() {
  var accountant = this.accountant;
  	console.log('updating..', this.accountant)
    this.http.put('http://192.168.1.77/accountant/'+this.accountant.id+'/', this.accountant)
      .subscribe(res => {
          alert('updated')
        }, (err) => {
          console.log(err);
        }
      );
  }

}
