import { HttpClient } from '@angular/common/http';
import {HttpService} from '../../servers/http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {

   posts: any[];

  constructor( private http: HttpClient) { }

  url: string = 'https://jsonplaceholder.typicode.com/posts';

  ngOnInit(): void {
    this.http.get(this.url).subscribe((response) => {
			this.posts = response;
    });

  }

}
