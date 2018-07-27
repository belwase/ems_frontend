import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-attendance-edit',
  templateUrl: './attendance-edit.component.html',
  styleUrls: ['./attendance-edit.component.css']
})
export class AttendanceEditComponent implements OnInit {

  attendance = {user:{}};
  
  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  	 this.getAttendance(this.route.snapshot.params['id']);
  	}
  	 getAttendance(id) {
    this.http.get('http://192.168.1.77/attendance/'+id).subscribe(data => {
      this.attendance = data;
     });
  }

updateAttendance() {
    var attendance = this.attendance;
  	console.log('updating..', this.attendance)
    this.http.put('http://192.168.1.77/attendance/'+this.attendance.id+'/', this.attendance)
      .subscribe(res => {
          alert('updated')
        }, (err) => {
          console.log(err);
        }
      );
  }
}
