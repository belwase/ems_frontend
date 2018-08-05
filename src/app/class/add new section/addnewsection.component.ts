import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-section-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class SectionAddComponent implements OnInit {
  section ={user:{}};

  constructor(private http: HttpClient, private router: Router) { }
  
  ngOnInit() {
  }
   saveSection() {
    this.http.post('http://192.168.1.77/section/', this.section)
      .subscribe(res => {
            let id=res['id'];
          this.router.navigate(['/section-add', id]);
        }, (err) => {
          console.log(err);
        }
        );
   }

}
