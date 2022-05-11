// This class represents a todo item and its associated
// data: the todo title and a flag that shows whether the
// todo item is done.

class Todo {
  static DONE_MARKER = "X";
  static UNDONE_MARKER = " ";

  constructor(title) {
    this.title = title;
    this.done = false;
  }

  toString() {
    let marker = this.isDone() ? Todo.DONE_MARKER : Todo.UNDONE_MARKER;
    return `[${marker}] ${this.title}`;
  }

  markDone() {
    this.done = true;
  }

  markUndone() {
    this.done = false;
  }

  isDone() {
    return this.done;
  }

  getTitle() {
    return this.title;
  }
}

class TodoList {
  constructor(title) {
    this.title = title;
    this.todos = [];
  }


  add(todo) {
    if (todo instanceof Todo) {
      this.todos.push(todo);
    } else {
      console.log("TypeError: can only add Todo objects");
    }
  }

  size() {
    return this.todos.length;
  }

  first() {
    return this.todos[0];
  }

  last() {
    return this.todos[this.size() - 1];
  }

  isValidIndex(index) {
    if (index >= 0 && index < this.size()) return true;
    else return false;
  }

  itemAt(index) {
    if (this.isValidIndex(index)) {
      return this.todos[index];
    } else {
      throw new ReferenceError(`invalid index: ${index}`);
    }
  }

  markDoneAt(index) {
    if (this.isValidIndex(index)) {
      this.todos[index].markDone();
    } else {
      throw new ReferenceError(`invalid index: ${index}`);
    }
  }

  markUndoneAt(index) {
    if (this.isValidIndex(index)) {
      this.todos[index].markUndone();
    } else {
      throw new ReferenceError(`invalid index: ${index}`);
    }
  }

  isDone() {
    return this.todos.every(todo => todo.isDone());
  }

  shift() {
    return this.todos.shift();
  }

  pop() {
    return this.todos.pop();
  }

  removeAt(index) {
    if (this.isValidIndex(index)) {
      return this.todos.splice(index, 1);
    } else {
      throw new ReferenceError(`invalid index: ${index}`);
    }
  }

  toString() {
    console.log(`---- ${this.title} ----`);
    this.todos.forEach(todo => console.log(`${todo.toString()}`));
  }

  forEach(callback) {
    this.todos.forEach(callback);
  }

  filter(callback) {
    let filteredTodolist = new TodoList(this.title);
    filteredTodolist.todos = this.todos.filter(callback);
    return filteredTodolist;
  }

  findByTitle(title) {
    return this.filter(todo => todo.title === title).todos[0];
  }

  allDone() {
    return this.filter(todo => todo.isDone());
  }

  allNotDone() {
    return this.filter(todo => !todo.isDone());
  }

  markDone(title) {
    let titles = [];
    this.forEach(todo => titles.push(todo.title));
    this.markDoneAt(titles.indexOf(title));
  }

  markAllDone() {
    this.forEach(todo => todo.markDone());
  }

  markAllUndone() {
    this.forEach(todo => todo.markUndone());
  }

  toArray() {
    return this.todos.slice();
  }
}


let todo1 = new Todo("Buy milk");
let todo2 = new Todo("Clean room");
let todo3 = new Todo("Go to the gym");
let todo4 = new Todo("Go shopping");
let todo5 = new Todo("Feed the cats");
let todo6 = new Todo("Study for Launch School");
let list = new TodoList("Today's Todos");

list.add(todo1);
list.add(todo2);
list.add(todo3);
list.add(todo4);
list.add(todo5);
list.add(todo6);
todo1.markDone();
todo5.markDone();

let doneTodos = list.filter(todo => todo.isDone());
console.log(doneTodos);

list.filter(todo => todo.isDone()).first();

console.log(list.findByTitle("Buy milk"));
console.log(list.findByTitle("Buy milk!"));
console.log(list.allDone());
console.log(list.allNotDone());
list.markDone("Clean room");
console.log(list.allDone());

list.markAllDone();
console.log(list);

list.markAllUndone();
console.log(list);

console.log(list.toArray());