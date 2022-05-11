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
}


let list = new TodoList("Today's Todos");
console.log(list);

let todo1 = new Todo("Buy milk");
let todo2 = new Todo("Clean room");
let todo3 = new Todo("Go to the gym");
let todo4 = new Todo("Go shopping");

list.add(todo1);
list.add(todo2);
list.add(todo3);
list.add(todo4);
console.log(list);

console.log(list.size());

console.log(list.first());
console.log(list.last());

let emptyList = new TodoList("Empty List");
console.log(emptyList.first());
console.log(emptyList.last());

list.markDoneAt(1);
console.log(list);

list.markUndoneAt(1);
console.log(list);

console.log(list.isDone()); // false

list.markDoneAt(0);
list.markDoneAt(1);
list.markDoneAt(2);
list.markDoneAt(3);
console.log(list.isDone()); // true

list.markUndoneAt(2);
console.log(list.isDone()); // false

console.log(list.shift());
console.log(list.pop());
console.log(list);

console.log(emptyList.shift());
console.log(emptyList.pop());
console.log(emptyList);

// First, let's create some new todos.
let todo5 = new Todo("Feed the cats");
let todo6 = new Todo("Study for Launch School");
list.add(todo5);
list.add(todo6);
console.log(list);

console.log(list.removeAt(2));
console.log(list.removeAt(0));
console.log(list.removeAt(1));
console.log(list);

list.add(todo1);
list.add(todo2);
list.add(todo4);
list.add(todo5);
list.add(todo6);
console.log(list.toString());

list.forEach(todo => console.log(todo.toString()));