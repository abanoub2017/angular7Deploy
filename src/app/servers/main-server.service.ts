import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainServerService {

  listName = [
    { name: 'first', id: '1' },
    { name: 'first', id: '1' },
    { name: 'first', id: '1' },
    { name: 'first', id: '1' },
    { name: 'first', id: '1' },
  ];
  getAll() {
    return this.listName;
  }
}
