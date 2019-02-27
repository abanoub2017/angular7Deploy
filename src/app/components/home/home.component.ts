import { Component } from '@angular/core';
import { MainServerService } from '../../servers/main-server.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  firstname = '';

  start: boolean = false;

  starClick() {
    this.start = !this.start;
  }

  listName ;
  constructor(mainserverservice: MainServerService) {
    this.listName = mainserverservice.listName;
  }

  isActive = true;
  eventClick() {
    this.isActive = false;
    console.log('background color is change ');

  }

}
