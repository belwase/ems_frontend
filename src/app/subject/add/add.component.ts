import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-subject-add',
  templateUrl: './subject-add.component.html',
  styleUrls: ['./subject-add.component.css']
})
export class SubjectAddComponent implements OnInit {
  subject ={user:{}};
  constructor(private http: HttpClient, private router: Router) { }
  ngOnInit() {
  }
   saveStudent() {
    this.http.post('http://192.168.1.77/subject/', this.subject)
      .subscribe(res => {
            let id=res['id'];
          this.router.navigate(['/subject-add', id]);
        }, (err) => {
          console.log(err);
        }
        );
   }

}
