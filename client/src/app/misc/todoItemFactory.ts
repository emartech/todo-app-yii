export module TodoItemFactory {

  export function createTodoItem(title: string, completed = false) {
    return {
        title: title,
        completed: completed
    };
  }
}
