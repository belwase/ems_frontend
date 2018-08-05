import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-grade-edit',
  templateUrl: './grade-edit.component.html',
  styleUrls: ['./grade-edit.component.css']
})
export class GradeEditComponent implements OnInit {

  grade = {user:{}};
  
  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  	 this.getGrade(this.route.snapshot.params['id']);
  	}
  	 getGrade(id) {
    this.http.get('http://192.168.1.77/grade/'+id).subscribe(data => {
      this.grade = data;
     });
  }

updateGrade() {
    var grade = this.grade;
  	console.log('updating..', this.grade)
    this.http.put('http://192.168.1.77/grade/'+this.grade.id+'/', this.grade)
      .subscribe(res => {
          alert('updated')
        }, (err) => {
          console.log(err);
        }
      );
  }
}
