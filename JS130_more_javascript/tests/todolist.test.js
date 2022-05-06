
const Todo = require('./todo');
const TodoList = require('./todolist');

describe('TodoList', () => {
  let todo1;
  let todo2;
  let todo3;
  let list;

  beforeEach(() => {
    todo1 = new Todo('Buy milk');
    todo2 = new Todo('Clean room');
    todo3 = new Todo('Go to the gym');

    list = new TodoList("Today's Todos");
    list.add(todo1);
    list.add(todo2);
    list.add(todo3);
  });

  // your tests go here
  test("has a size of 3", () => {
    expect(list.size()).toBe(3);
  });

  test("toArray method returns an array of todos", () => {
    expect(list.toArray()).toEqual([todo1, todo2, todo3]);
  });

  test("first item is todo1", () => {
    expect(list.first()).toEqual(todo1);
  });

  test("last item is todo3", () => {
    expect(list.last()).toEqual(todo3);
  });

  test("shift removes and returns todo1", () => {
    let shiftedElement = list.shift();
    expect(shiftedElement).toEqual(todo1);
    expect(list.toArray()).toEqual([todo2, todo3]);
  });

  test("pop removes and returns todo3", () => {
    let poppedElement = list.pop();
    expect(poppedElement).toEqual(todo3);
    expect(list.toArray()).toEqual([todo1, todo2]);
  });

  test("isDone method returns true if all items are done", () => {
    expect(list.isDone()).toBe(false);
    list.markDone('Buy milk');
    expect(list.isDone()).toBe(false);
    list.markDone('Clean room');
    expect(list.isDone()).toBe(false);
    list.markDone('Go to the gym');
    expect(list.isDone()).toBe(true);
  });

  test("adds returns a TypeError if we try to add an item that isn't a Todo object", () => {
    expect(() => list.add(1)).toThrow(TypeError);
    expect(() => list.add("Mike")).toThrow(TypeError);
  });

  test("itemAt returns the correct object", () => {
    expect(list.itemAt(0)).toEqual(todo1);
    expect(list.itemAt(2)).toEqual(todo3);
    expect(() => list.itemAt(3)).toThrow(ReferenceError);
  });

  test("markDoneAt modifies the correct todo", () => {
    list.markDoneAt(0);
    expect(todo1.done).toBe(true);
    list.markDoneAt(2);
    expect(todo3.done).toBe(true);
    expect(() => list.markDoneAt(3)).toThrow(ReferenceError);
  });

  test("markUndoneAt modifies the correct todo", () => {
    list.markDoneAt(0);
    list.markUndoneAt(0);
    expect(todo1.done).toBe(false);
    list.markDoneAt(2);
    list.markUndoneAt(2);
    expect(todo3.done).toBe(false);
    expect(() => list.markUndoneAt(3)).toThrow(ReferenceError);
  });

  test("markAllDone marks all todos as done", () => {
    list.markAllDone();
    expect(todo1.done).toBe(true);
    expect(todo2.done).toBe(true);
    expect(todo3.done).toBe(true);
  });

  test("removeAt removes the appropriate todo", () => {
    list.removeAt(2);
    expect(list.toArray()).toEqual([todo1, todo2]);
    expect(() => list.removeAt(3)).toThrow(ReferenceError);
  });

  test("toString (test1) returns string representation of the list", () => {
    let string = `---- Today's Todos ----
[ ] Buy milk
[ ] Clean room
[ ] Go to the gym`;

    expect(list.toString()).toBe(string);
  });

  test("toString (test2) returns string representation of the list", () => {
    list.markDoneAt(2);
    let string = `---- Today's Todos ----
[ ] Buy milk
[ ] Clean room
[X] Go to the gym`;

    expect(list.toString()).toBe(string);
  });

  test("toString (test 3) returns string representation of the list", () => {
    list.markAllDone();
    let string = `---- Today's Todos ----
[X] Buy milk
[X] Clean room
[X] Go to the gym`;

    expect(list.toString()).toBe(string);
  });

  test("forEach is iterating over all elements", () => {
    let titles = [];
    list.forEach(todo => titles.push(todo.title));
    expect(titles).toEqual(["Buy milk", "Clean room", "Go to the gym"]);
  });

  test("filter filters the todos from the list object", () => {
    let filteredList = list.filter(todo => {
      return todo.title === "Clean room";
    });
    expect(filteredList.toArray()).toEqual([todo2])
  });
});