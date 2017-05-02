import { Component } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent {
  title = 'to do list!!!';
  task:string='';

todos:Array<ToDo>=[
{
  title: "nisko",
  isMy: true
},
{
  title: 'angular',
  isMy: false
}

];

  addToDo()
  {
    if(!this.task)
    {
      return;
    }
    const newTask:ToDo={
      title:this.task,
      isMy:true
    };
    this.todos.push(newTask);
    this.task= '';
  }

  deleteToDo(index)
  {
    this.todos.splice(index,1);
  }


}

interface ToDo{
  title:string;
  isMy:boolean;
}

