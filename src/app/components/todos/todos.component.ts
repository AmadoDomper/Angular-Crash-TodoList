import { Component, OnInit } from '@angular/core';
import {Todo} from '../../models/Todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
todos:Todo[];
  constructor(private todoService:TodoService) { }

  ngOnInit(): void {
    this.todoService.getTodos().subscribe(t => {
      this.todos = t;
    }
    );
  }

  deleteTodo(todo:Todo){
    this.todos = this.todos.filter(t => t.id !== todo.id);
    this.todoService.deleteTodo(todo).subscribe(t => { console.log("deleted") });
  }

  addTodo(todo:Todo){
    this.todoService.addTodo(todo).subscribe(t => {
      console.log(t);
      this.todos.push(t);
    });
  }

}
