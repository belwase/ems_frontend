import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-book-dashboard',
  templateUrl: './book-dashboard.component.html',
  styleUrls: []
})
export class BookDashboardComponent implements OnInit {

 issues : any;

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  	 this.getBookDashboard(this.route.snapshot.params['id']);
  	 }
 getBookDashboard(id) {
    this.http.get('http://192.168.1.77:8001/book-issue/').subscribe(data => {
      this.issues = data;
     });
  }

updateBookDashboard() {
  var issues = this.issues;
  	console.log('updating..', this.issues)
    this.http.put('http://192.168.1.77:8001/book-issues/'+this.issues.id+'/', this.issues)
      .subscribe(res => {
          alert('updated')
        }, (err) => {
          console.log(err);
        }
      );
  }

}