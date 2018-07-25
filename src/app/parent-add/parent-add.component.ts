import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-parent-add',
  templateUrl: './parent-add.component.html',
  styleUrls: ['./parent-add.component.css']
})
export class ParentAddComponent implements OnInit {

   parent = {user:{}} ;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  
    this.http.get('http://192.168.1.77/parents/', this.parent).subscribe(res => {
          let id = (res =>
          this.router.navigate(['/parent-edit', id]);
        }, (err) => {
          console.log(err);
        }
      );
  }
  }
}


