import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-manage-book',
  templateUrl: './manage-book.component.html',
  styleUrls: []
})
export class ManageBookComponent implements OnInit {
   book = {};
    managebook = [];
    bookcategory = [];
    selectedCategory = 1;
  books = [];
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.getManageBook();
    this.getBooks();
     }   
     getManageBook(){
    this.http.get('http://192.168.1.77:8001/api/library/bookcategory/').subscribe(data => {
      this.bookcategory= data;
      this.managebook= data;
      this.selectedCategory = data[0].id;
      
      console.log(this.managebook);

       });
 }

 getBooks(){
    this.http.get('http://192.168.1.77:8001/api/library/book/').subscribe(data => {
    this.books= data;      
      console.log(this.books);

       });
 }

 selectBookCategory(val){
   this.selectedCategory = val
 }

 updateManageBook() {
    var managebook = this.managebook;
    console.log('updating..', managebook)
    this.http.put('http://192.168.1.77:8001/api/library/book/', this.managebook)
      .subscribe(res => {
          alert('updated')
        }, (err) => {
          console.log(err);
        });
    }
 
     saveManageBook(){
    this.http.post('http://192.168.1.77:8001/api/library/book/', this.book).subscribe(res =>{
        let id =res['id'];
        alert('book added')
        //this.router.navigate(['/manage-book', id]);
        
     }, (err) => {
          console.log(err);
        });  
 }
}


