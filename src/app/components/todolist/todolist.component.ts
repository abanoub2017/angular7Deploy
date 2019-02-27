import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  courses = [
    { name: 'Html', id: 11 },
    { name: 'Css3', id: 12, },
    { name: 'JavaScript', id: 13 },
    { name: 'Sass', id: 14 },
  ];

  addItem = '';

  addItemB() {
    const cureses = this.courses;
    // this.courses.push({ name: this.addItem , id: (Math.random()) + 1});
    this.courses.push({ name: this.addItem, id: Math.max.apply(Math, cureses.map(function (o) { return o.id + 1; })) });

     this.addItem = null;

  }
  removeItem(obj) {
    const index = this.courses.indexOf(obj);
    this.courses.splice(index, 1);
    console.log(obj.id);

  }

  constructor() { }

  ngOnInit() {
  }

}
