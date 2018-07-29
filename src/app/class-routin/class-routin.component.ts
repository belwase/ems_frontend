import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-class-routin',
  templateUrl: './class-routin.component.html',
  styleUrls: ['./class-routin.component.css']
})
export class ClassRoutinComponent implements OnInit {
_class = {user:{}} ;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    }
saveClass(){
    this.http.post('http://192.168.1.77/class/', this._class).subscribe(res => {
          let id = res['id'];
          this.router.navigate(['/class-routin', id]);
        }, (err) => {
          console.log(err);
        }
      );
  }

}
