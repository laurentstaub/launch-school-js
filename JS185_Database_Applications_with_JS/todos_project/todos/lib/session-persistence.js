const SeedData = require("./seed-data");
const deepCopy = require("./deep-copy");
const { sortTodoLists, sortTodos } = require("./sort");

// export a class that manages the persistence of the todo lists and todos.
module.exports = class SessionPersistence {
  constructor(session) {
    this._todoLists = session.todoLists || deepCopy(SeedData);
    session.todoLists = this._todoLists;
  }

  // Create a new todo list with the given title and return true on success.
  createTodo(todoListId, title) {
    let todoList = this._findTodoList(todoListId);
    if (!todoList) return false;

    todoList.todos.push({
      id: this._nextId(),
      title,
      done: false
    });
    
    return true;
  }

  // finds a todoList and returns a copy of the list
  loadTodoList(todoListId) {
    return deepCopy(this._findTodoList(todoListId));
  };

  // finds a todo and returns the todo
  loadTodo (todoListId, todoId) {
    return deepCopy(this._findTodo(todoListId, todoId));
  }

  // Returns a reference to the todoList with the given id.
  // Returns undefined if no todoList with the given id exists.
  _findTodoList(todoListId) {
    return this._todoLists.find(todoList => todoList.id === todoListId);
  }

  // Returns a reference to the todo with the given id.
  // Returns undefined if no todo with the given id exists.
  _findTodo (todoListId, todoId) {
    let todoList = this._findTodoList(todoListId);
    if (!todoList) return undefined;
    return todoList.todos.find(todo => todo.id === todoId);
  }

  hasUndoneTodos(todoList) {
    return todoList.todos.some(todo => !todo.done);
  }

  // Returns true if there are todos and all todos are done.
  isDoneTodoList(todoList) {
    return todoList.todos.length > 0 && todoList.todos.every(todo => todo.done);
  }

  // Returns a copy of the list of todo lists sorted by completion status and
  // title (case-insensitive).
  sortedTodoLists() {
    let todoLists = deepCopy(this._todoLists);
    let undone = todoLists.filter(todoList => !this.isDoneTodoList(todoList));
    let done = todoLists.filter(todoList => this.isDoneTodoList(todoList));
    return sortTodoLists(undone, done);
  }

  // Returns a copy of the list of todos sorted by completion status and
  // title (case-insensitive).
  sortedTodos(todoList) {
    let todos = deepCopy(todoList.todos);
    let undone = todos.filter(todo => !todo.done);
    let done = todos.filter(todo => todo.done);
    return sortTodos(undone, done);
  }

  toggleDoneTodo(todoListId, todoId) {
    let todo = this._findTodo(todoListId, todoId);
    if (!todo) return false;

    todo.done = !todo.done;
    return true;
  }

  completeAllTodos(todoListId) {
    let todoList = this._findTodoList(todoListId);
    if (!todoList) return false;
    
    todoList.todos.forEach(todo => todo.done = true);
    return true;
  }

  destroyTodo(todoListId, todoId) {
    let todoList = this._findTodoList(todoListId);
    if (!todoList) return false;

    let todoIndex = todoList.todos.findIndex(todo => todo.id === todoId);
    if (todoIndex === -1) return false;

    todoList.todos.splice(todoIndex, 1);
    return true;
  }
};