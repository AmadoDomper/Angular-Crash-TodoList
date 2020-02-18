import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Todo } from '../models/Todo';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders(
    {
      'Content-Type': 'application/json'
    }
  )
}


@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todosUrl:string = 'http://jsonplaceholder.typicode.com/todos';
  todosLimit = '?_limit=5';
  constructor(private http:HttpClient) { }

  getTodos():Observable<Todo[]>{
      return this.http.get<Todo[]>(`${this.todosUrl}${this.todosLimit}`);
  }

  toggleCompleted(todoItem: Todo):Observable<any> {
    const url = `${this.todosUrl}/${todoItem.id}`
    return this.http.put(url,todoItem, httpOptions)
  }

  deleteTodo(todoItem: Todo):Observable<any> {
    console.log("Delete Service");
    const url = `${this.todosUrl}/${todoItem.id}`
    return this.http.delete(url,httpOptions);
  }

  addTodo(todoItem: Todo):Observable<any> {
    console.log("Add Todo");
    return this.http.post<Todo>(this.todosUrl,todoItem,httpOptions);
  }

}
