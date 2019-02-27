import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor() { }
  url: string = 'https://jsonplaceholder.typicode.com/posts';
}
