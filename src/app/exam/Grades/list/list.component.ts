import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-grade-list',
  templateUrl: './grade-list.component.html',
  styleUrls: ['./grade-list.component.css']
})
export class GradeListComponent implements OnInit {

  grades: any;
  constructor(private http: HttpClient) { }

ngOnInit() {
  this.http.get('http://192.168.1.77/grade/').subscribe(data => {
  		console.log('data :: ')
  		console.log(data)
	    this.grades = data;
     });
  }

}
