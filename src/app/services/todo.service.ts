import { Injectable } from '@angular/core';
import { ITodo, TodoStatus } from 'src/models/todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  public todos: ITodo[] = [{ title: 'Brush teeth', status: TodoStatus.UNDONE }];
  constructor() {}

  public addTodo(title: string) {
    this.todos.push({
      title,
      status: TodoStatus.UNDONE,
    });
  }

  public filter() {
    this.todos = this.todos.filter((todo: ITodo) => todo.title.length !== 0);
  }
}
