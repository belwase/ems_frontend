import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: []
})
export class AddCategoryComponent implements OnInit {
		category = {};
    bookcategory = [];
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  	   this.getBookCategory();
  	 }
     getBookCategory(){
    this.http.get('http://192.168.1.77:8001/api/library/bookcategory/').subscribe(data => {   
    this.bookcategory= data;
      console.log(this.bookcategory);
       });
 }

 updateBookCategory() {
    var bookcategory = this.bookcategory;
    console.log('updating..', bookcategory)
    this.http.put('http://192.168.1.77:8001/api/library/bookcategory/', this.bookcategory)
      .subscribe(res => {
          alert('updated')
        }, (err) => {
          console.log(err);
        });
    }
 
  saveAddCategory(){
  	this.http.post('http://192.168.1.77:8001/api/library/bookcategory/', this.category).subscribe(res =>{
  			let id =res['id'];
  			alert('category added')
        this.getBookCategory();
  			//this.router.navigate(['/add-category', id]); 			
  	 }, (err) => {
          console.log(err);

  	 });
	}
}
