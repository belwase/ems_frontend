import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.css']
})
export class SubjectListComponent implements OnInit {
  subjects: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
  this.http.get('http://192.168.1.77/subject/').subscribe(data => {
      console.log('data :: ')
      console.log(data)
      this.subjects = data;
    });
  }

}
