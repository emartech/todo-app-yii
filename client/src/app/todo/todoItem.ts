export class TodoItem {

  constructor(private _title: string, private _completed: boolean) {
  }

  get title() {
    return this._title;
  }

  get completed() {
    return this._completed;
  }

  flipCompleted() {
    this._completed = !this.completed;
  }
}
