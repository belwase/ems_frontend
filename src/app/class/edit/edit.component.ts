import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-class-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class ClassEditComponent implements OnInit {

   _class = any;
  
  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  	 this.get_Class(this.route.snapshot.params['id']);
  	}
  	 get_Class(id) {
    this.http.get('http://192.168.1.77/_class/'+id).subscribe(data => {
      this._class = data;
     });
  }

updateClass() {
    var _class = this.class;
  	console.log('updating..', this._class)
    this.http.put('http://192.168.1.77/class/'+this._class.id+'/', this._class)
      .subscribe(res => {
          alert('updated')
        }, (err) => {
          console.log(err);
        }
      );
  }
}
