import { Component, Input } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { ITodo } from 'src/models/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent {
  @Input() todos: ITodo[] = [];
  constructor(readonly todoService: TodoService) {}
  ngOnInit() {
    this.todoService.loadFromStorage();
  }
}
