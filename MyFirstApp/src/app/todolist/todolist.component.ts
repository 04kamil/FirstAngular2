import { Component } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent {
  title = 'to do list!!!';
  task:string='';

  addToDo()
  {
    console.log(this.task);
    
  }
}
