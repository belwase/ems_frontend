import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-class-edit',
  templateUrl: './class-edit.component.html',
  styleUrls: ['./class-edit.component.css']
})
export class ClassEditComponent implements OnInit {

  _class = {user:{}};
  
  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  	 this.getClass(this.route.snapshot.params['id']);
  	}
  	 getClass(id) {
    this.http.get('http://192.168.1.77/class/'+id).subscribe(data => {
      this._class = data;
     });
  }

updateClass() {
    var _class = this._class;
  	console.log('updating..', this.class)
    this.http.put('http://192.168.1.77/class/'+this._class.id+'/', this._class)
      .subscribe(res => {
          alert('updated')
        }, (err) => {
          console.log(err);
        }
      );
  }
}
