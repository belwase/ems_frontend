import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-exam-add',
  templateUrl: './exam-add.component.html',
  styleUrls: ['./exam-add.component.css']
})
export class ExamAddComponent implements OnInit {
  exam ={user:{}};
  constructor(private http: HttpClient, private router: Router) { }
  ngOnInit() {
  }
   saveExam() {
    this.http.post('http://192.168.1.77/exam/', this.exam)
      .subscribe(res => {
            let id=res['id'];
          this.router.navigate(['/exam-add', id]);
        }, (err) => {
          console.log();
        }
        );
   }

}