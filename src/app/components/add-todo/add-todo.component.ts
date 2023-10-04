import { Component } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss'],
})
export class AddTodoComponent {
  public newTodoTitle: string = '';
  constructor(private todoService: TodoService) {}
  public addTodo() {
    this.todoService.addTodo(this.newTodoTitle);
    this.newTodoTitle = '';
  }
}
