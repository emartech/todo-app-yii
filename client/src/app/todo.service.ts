import { Injectable, EventEmitter } from '@angular/core';
import { TodoItem } from './todo/todoItem';

@Injectable()
export class TodoService {

  private _todoItems: TodoItem[] = [];
  private _todoItems$ = new EventEmitter<TodoItem[]>();

  constructor() { }

  get todoItems() {
    return this._todoItems;
  }

  get todoItems$() {
    return this._todoItems$;
  }

  addTodo(todoTitle: string) {
    let newTodoItem = new TodoItem(todoTitle, false)
    this._todoItems.push(newTodoItem)
    this.refreshTodoItems()
  }

  toggleTodo(todoItem: TodoItem) {
    todoItem.flipCompleted();
    this.refreshTodoItems()
  }

  removeTodo(todoItem: TodoItem) {
    let todoItemIndex = this._todoItems.indexOf(todoItem)
    this._todoItems.splice(todoItemIndex, 1);
    this.refreshTodoItems();
  }

  refreshTodoItems() {
    this._todoItems$.emit(this._todoItems);
  }

  // For dummy starting "database"
  addFullTodo(todoItem: TodoItem) {
    this._todoItems.push(todoItem)
    this.refreshTodoItems()
  }
}
