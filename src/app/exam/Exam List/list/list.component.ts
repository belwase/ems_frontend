import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-exam-list',
  templateUrl: './exam-list.component.html',
  styleUrls: ['./exam-list.component.css']
})
export class ExamListComponent implements OnInit {

exams: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
  this.http.get('http://192.168.1.77/exam/').subscribe(data => {
      console.log('data :: ')
      console.log(data)
      this.exams = data;
    });
  }

}
