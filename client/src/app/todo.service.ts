import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class TodoService {

  private _todos$ = new EventEmitter<string>();

  constructor() { }

  get todos$(){
    return this._todos$;
  }

  addTodo(newTodo: string) {
    this._todos$.emit(newTodo);
  }

}
