import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-attendance-add',
  templateUrl: './attendance-add.component.html',
  styleUrls: ['./attendance-add.component.css']
})
export class AttendanceAddComponent implements OnInit {
	attendance = {user:{}} ;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  	}
saveAttendance(){
    this.http.post('http://192.168.1.77/attendance/', this.attendance).subscribe(res => {
          let id = res['id'];
          this.router.navigate(['/attendance-add', id]);
        }, (err) => {
          console.log(err);
        }
      );
  }

}
