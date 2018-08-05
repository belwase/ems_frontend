import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-class-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class ParentAddComponent implements OnInit {

  parent={user:{}};

  constructor(private http: HttpClient, private router: Router) { }
  ngOnInit() {
  }
   saveParent() {
    this.http.post('http://192.168.1.77/parent/', this.parent)
      .subscribe(res => {
            let id=res['id'];
          this.router.navigate(['/parent-add', id]);
        }, (err) => {
          console.log();
        }
        );
   }

}