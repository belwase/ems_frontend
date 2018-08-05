import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-subject-edit',
  templateUrl: './subject-edit.component.html',
  styleUrls: ['./subject-edit.component.css']
})
export class SubjectEditComponent implements OnInit {
  
  subject={};

  constructor(private http:HttpClient, private router: Router) { }

  ngOnInit() {
     this.getStudent(this.route.snapshot.params['id']);
  }

  getStudent(id) {
    this.http.get('http://192.168.1.77/subject/'+id).subscribe(data => {
      this.subject = data;
      //console.log(this.student);
    });
  }

  
 updateSubject() {
    console.log('updating..', this.subject)
    this.http.put('http://192.168.1.77/subject/'+this.subject.id+'/', this.subject)
      .subscribe(res => {
          alert('updated')
        }, (err) => {
          console.log(err);
        }
      );
  }

}
