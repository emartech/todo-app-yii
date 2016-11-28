import { Component, Injectable, EventEmitter } from '@angular/core';
import { TodoItemFactory } from './misc/todoItemFactory';
import { TodoItem } from './misc/todoItem';

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

  addTodo(todoTitle: string, todoCompleted = false) {
    let newTodoItem = TodoItemFactory.createTodoItem(todoTitle, todoCompleted);
    this._todoItems.push(newTodoItem);
    this.refreshTodoItems();
  }

  toggleTodo(todoItem: TodoItem) {
    todoItem.completed = !todoItem.completed;
    this.refreshTodoItems();
  }

  removeTodo(todoItem: TodoItem) {
    let todoItemIndex = this._todoItems.indexOf(todoItem);
    this._todoItems.splice(todoItemIndex, 1);
    this.refreshTodoItems();
  }

  refreshTodoItems() {
    this._todoItems$.emit(this._todoItems);
  }
}
