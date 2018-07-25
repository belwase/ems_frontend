import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-parent-edit',
  templateUrl: './parent-edit.component.html',
  styleUrls: ['./parent-edit.component.css']
})
export class ParentEditComponent implements OnInit {

  parent: any;
  constructor(private http: HttpClient, private router: Router, private route: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  	 this.getParent(this.route.snapshot.params['id']);
  	}
  	 getParent(id) {
    this.http.get('http://192.168.1.77/parents/'+id).subscribe(data => {
      this.parent = data;
     });
  }

updateParent() {
    var parent = this.parent;
  	console.log('updating..', this.parent)
    this.http.put('http://192.168.1.77/parents/'+this.parent.id+'/', this.parent)
      .subscribe(res => {
          alert('updated')
        }, (err) => {
          console.log(err);
        }
      );
  }
}
