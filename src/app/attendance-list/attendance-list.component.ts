import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-attendance-list',
  templateUrl: './attendance-list.component.html',
  styleUrls: ['./attendance-list.component.css']
})
export class AttendanceListComponent implements OnInit {

  attendances: any;
  constructor(private http: HttpClient) { }

ngOnInit() {
  this.http.get('http://192.168.1.77/attendance/').subscribe(data => {
  		console.log('data :: ')
  		console.log(data)
	    this.attendances = data;
     });
  }

}
