import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: []
})
export class SearchComponent implements OnInit {
   searchs : any;
  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  	 this.getSearch(this.route.snapshot.params['id']);
  	 }
 getSearch(id) {
    this.http.get('http://192.168.1.77:8001/search/').subscribe(data => {
      this.searchs = data;
     });
  }

updateSearch() {
  var searchs = this.searchs;
  	console.log('updating..', this.searchs)
    this.http.put('http://192.168.1.77:8001/search/'+this.searchs.id+'/', this.searchs)
      .subscribe(res => {
          alert('updated')
        }, (err) => {
          console.log(err);
        }
      );
  }
}