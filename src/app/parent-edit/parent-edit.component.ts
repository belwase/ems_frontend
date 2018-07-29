import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-parent-edit',
  templateUrl: './parent-edit.component.html',
  styleUrls: ['./parent-edit.component.css']
})
export class ParentEditComponent implements OnInit {
   parents={user:{}};
  
  constructor(private http:HttpClient, private router: Router) { }

  ngOnInit() {
    this.getParents(this.route.snapshot.params['id']);
  }

getParents(id) {
    this.http.get('http://192.168.1.77/parents/'+id).subscribe(data => {
      this.parents = data;
      //console.log(this.student);
    });
  }

  
 updateParent() {
  var parents=this.parents;
    console.log('updating..', parents)
    this.http.put('http://192.168.1.77/parents/'+this.parents.id+'/', this.parents)
      .subscribe(res => {
          alert('updated')
        }, (err) => {
          console.log(err);
        }
      );
  }

}
