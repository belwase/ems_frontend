import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-class-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ClassListComponent implements OnInit {

	_class:any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  	this.http.get('http://192.168.1.77/class').subscribe(data=>{
  		console.log('data :: ')
  		console.log(data)
  		this._class = data;
  	});
  }

}
