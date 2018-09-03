import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-book-issue',
  templateUrl: './book-issue.component.html',
  styleUrls: []
})
export class BookIssueComponent implements OnInit {
 //devices =  'Student Employee.split(' ');
  bookissue = [];
  book = [];
  constructor(private http: HttpClient, private router: Router) { }
  ngOnInit() {
        this.getBook();
     }
     getBook(){
    this.http.get('http://192.168.1.77:8001/api/library/bookissue/').subscribe(data => {   
    this.book= data;
      console.log(this.book);
       });
 }
 
  saveBookIssue(){
    this.http.post('http://192.168.1.77:8001/api/library/bookissue/', this.bookissue).subscribe(res =>{
            let id =res['id'];
            alert('added')
            //this.router.navigate(['/add-category', id]);            
     }, (err) => {
         console.log(err);
     });
    }

