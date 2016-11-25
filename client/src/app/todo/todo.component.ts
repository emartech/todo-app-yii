import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { TodoItem } from './todoItem';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers: [TodoService]
})
export class TodoComponent implements OnInit {

  private todoItems: TodoItem[] = [];

  constructor(private todoService: TodoService) {
    todoService.todoItems$.subscribe( (todoItems) => {
      this.todoItems = todoItems;
    });

    // Creation of starting dummy "database"
    this.todoService.addFullTodo(new TodoItem("macska1", true));
    this.todoService.addFullTodo(new TodoItem("macska2", false));
    this.todoService.addFullTodo(new TodoItem("macska3", true));
  }

  ngOnInit() {
  }

  addTodo(todoTitle: string) {
    this.todoService.addTodo(todoTitle);
  }

  toggleTodo(todoItem: TodoItem) {
    this.todoService.toggleTodo(todoItem);
  }

  removeTodo(todoItem: TodoItem) {
    this.todoService.removeTodo(todoItem);
  }
}