import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-manage-member',
  templateUrl: './manage-member.component.html',
  styleUrls: []
})
export class ManageMemberComponent implements OnInit {
   member : any;
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
     
    }

     saveManageMember(){
    this.http.post('http://192.168.1.77:8001/api/library/member/', this.member).subscribe(res =>{
        let id =res['id'];
        alert('book added')
        //this.router.navigate(['/manage-book', id]);
        
     }, (err) => {
          console.log(err);
        });  
 }
}