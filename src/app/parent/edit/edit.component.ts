import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-class-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class ParentEditComponent implements OnInit {

   parent = any;
  
  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
     this.getparent(this.route.snapshot.params['id']);
    }
     getparent(id) {
    this.http.get('http://192.168.1.77/parent/'+id).subscribe(data => {
      this.parent = data;
     });
  }

updateParent() {
    var parent = this.class;
    console.log('updating..', this.parent)
    this.http.put('http://192.168.1.77/parent/'+this.parent.id+'/', this.parent)
      .subscribe(res => {
          alert('updated')
        }, (err) => {
          console.log(err);
        }
      );
  }
}
