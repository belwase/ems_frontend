import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-accountant-list',
  templateUrl: './accountant-list.component.html',
  styleUrls: ['./accountant-list.component.css']
})
export class AccountantListComponent implements OnInit {

accountants: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
  this.http.get('http://192.168.1.77/accountant/').subscribe(data => {
      console.log('data :: ')
      console.log(data)
      this.accountants = data;
    });
  }

}
