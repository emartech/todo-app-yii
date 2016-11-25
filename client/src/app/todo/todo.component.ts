import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers: [TodoService]
})
export class TodoComponent implements OnInit {

  private todos: string[] = [];

  constructor(private todoService: TodoService) {
    todoService.todos$.subscribe( (todo) => {
      this.todos.push(todo);
    });
  }

  ngOnInit() {
  }

  addTodo(newTodo: string) {
    this.todoService.addTodo(newTodo);
  }

}
