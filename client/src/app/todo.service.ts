import { Component, Injectable, EventEmitter } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { TodoItemFactory } from './misc/todoItemFactory';
import { TodoItem } from './misc/todoItem';

@Injectable()
export class TodoService {

  private apiUrl = "http://localhost:1234/api";

  private _todoItems: TodoItem[] = [];
  private _todoItems$ = new EventEmitter<TodoItem[]>();


  constructor(private http: Http) {
  }


  get todoItems() {
    return this._todoItems;
  }

  get todoItems$() {
    return this._todoItems$;
  }


  addTodo(todoTitle: string, todoCompleted = false) {
    const newTodoItem = TodoItemFactory.createTodoItem(todoTitle, todoCompleted);
    this._todoItems.push(newTodoItem);
    this.refreshTodoItems();

    this.sendInsertRequest(newTodoItem);
  }

  toggleTodo(todoItem: TodoItem) {
    todoItem.completed = !todoItem.completed;
    this.refreshTodoItems();
  }

  removeTodo(todoItem: TodoItem) {
    const todoItemIndex = this._todoItems.indexOf(todoItem);
    this._todoItems.splice(todoItemIndex, 1);
    this.refreshTodoItems();
  }

  refreshTodoItems() {
    this._todoItems$.emit(this._todoItems);
  }


  sendInsertRequest(todoItem: TodoItem) {
    const requestUrl = this.apiUrl + "/Items";
    const requestBody = JSON.stringify(todoItem);
    const requestHeaders = new Headers({ 'Content-Type': 'application/json' });

    console.log(`Sent: ${requestBody}`);

    const request = this.http.post(requestUrl, requestBody, requestHeaders);

    return request;
  }
}
