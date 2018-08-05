import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-accountant-edit',
  templateUrl: './accountant-edit.component.html',
  styleUrls: ['./accountant-edit.component.css']
})
export class AccountantEditComponent implements OnInit {
  
  exam={user:{}};
  constructor(private http:HttpClient, private router: Router) { }

  ngOnInit() {
     this.getAccountant(this.route.snapshot.params['id']);
  }

  getExam(id) {
    this.http.get('http://192.168.1.77/exam/'+id).subscribe(data => {
      this.exam = data;
      //console.log(this.student);
    });
  }
  
 updateExam() {
    console.log('updating..', this.exam)
    this.http.put('http://192.168.1.77/exam/'+this.exam.id+'/', this.exam)
      .subscribe(res => {
          alert('updated')
        }, (err) => {
          console.log(err);
        }
      );
  }

}
