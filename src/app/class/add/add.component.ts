import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-class-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class ClassAddComponent implements OnInit {

  _class={user:{}};

  constructor(private http: HttpClient, private router: Router) { }
  ngOnInit() {
  }
   save_Class() {
    this.http.post('http://192.168.1.77/_class/', this._class)
      .subscribe(res => {
            let id=res['id'];
          this.router.navigate(['/_class-add', id]);
        }, (err) => {
          console.log();
        }
        );
   }

}