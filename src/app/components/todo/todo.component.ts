import { Component, Input } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { ITodo, TodoStatus } from 'src/models/todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent {
  @Input() todo: ITodo = { title: '<Unknown task>', status: TodoStatus.UNDONE };
  public todoStatus = TodoStatus;
  constructor(private todoService: TodoService) {}

  public markDone() {
    this.todo.status = TodoStatus.DONE;
  }

  public dropTodo() {
    this.todo.title = '';
    this.todoService.filter();
  }
}
