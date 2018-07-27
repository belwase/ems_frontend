import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-grade-add',
  templateUrl: './grade-add.component.html',
  styleUrls: ['./grade-add.component.css']
})
export class GradeAddComponent implements OnInit {
	grade = {user:{}} ;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  	}
saveGrade(){
    this.http.post('http://192.168.1.77/grade/', this.grade).subscribe(res => {
          let id = res['id'];
          this.router.navigate(['/grade-add', id]);
        }, (err) => {
          console.log(err);
        }
      );
  }

}
