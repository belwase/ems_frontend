import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-class-list',
  templateUrl: './class-list.component.html',
  styleUrls: ['./class-list.component.css']
})
export class ClassListComponent implements OnInit {

  classes: any;
  constructor(private http: HttpClient) { }

ngOnInit() {
  this.http.get('http://192.168.1.77/class/').subscribe(data => {
  		console.log('data :: ')
  		console.log(data)
	    this.classes = data;
     });
  }

}
