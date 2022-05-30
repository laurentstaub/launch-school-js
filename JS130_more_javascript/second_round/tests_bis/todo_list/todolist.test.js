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

  test('todolist has a size of 3', () => {
    expect(list.size()).toBe(3);
  });

  test('toarray logs an array of correct length', () => {
    expect(list.toArray()).toEqual([todo1, todo2, todo3]);
  });

  test('last returns the last todo added', () => {
    expect(list.last()).toEqual(todo3);
  });

  test('shift removes and returns the first todo', () => {
    expect(list.shift()).toEqual(todo1);
    expect(list.toArray()).toEqual([todo2, todo3]);
  });

  test('pop removes and returns the last todo', () => {
    expect(list.pop()).toEqual(todo3);
    expect(list.toArray()).toEqual([todo1, todo2]);
  });

  test('isDone returns true when all items are done, false otherwise', () => {
    expect(list.isDone()).toBe(false);
    list.markAllDone();
    expect(list.isDone()).toBe(true);
  });

  test('add throws an error if added object is not a Todo object', () => {
    expect(() => list.add(1)).toThrow(TypeError);
    expect(() => list.add('Hi')).toThrow(TypeError);
  });

  test('itemAt gets the right todo and raises a ReferenceError if we specify an index woth no element', () => {
    expect(list.itemAt(0)).toEqual(todo1);
    expect(() => list.itemAt(5)).toThrow(ReferenceError);
  });

  test('markDoneAt marks the correct to do as done, and raises a ReferenceError if we specify an index with no element', () => {
    list.markDoneAt(0);
    expect(list.allDone().toArray()).toEqual([todo1]);
    expect(() => list.markDoneAt(5)).toThrow(ReferenceError);
  });

  test('markUndoneAt marks the correct to do as done, and raises a ReferenceError if we specify an index with no element', () => {
    list.markDoneAt(0);
    list.markDoneAt(1);
    list.markUndoneAt(1);
    expect(list.allDone().toArray()).toEqual([todo1]);
    expect(() => list.markUndoneAt(5)).toThrow(ReferenceError);
  });

  test('markAllDone marks all todos as done', () => {
    list.markAllDone();
    expect(list.allDone().toArray()).toEqual([todo1, todo2, todo3]);
  });

  test('removeAt removes the correct todo and raises a ReferenceError if the argument is not a todo', () => {
    list.removeAt(2);
    expect(list.toArray()).toEqual([todo1, todo2]);
    expect(() => list.removeAt(5)).toThrow(ReferenceError);
  });

  test('toString returns the right representation of the string', () => {
    let representation = `---- Today's Todos ----
[ ] Buy milk
[ ] Clean room
[ ] Go to the gym`;

    expect(list.toString()).toBe(representation);
  });

  test('toString returns the right representation of the string when a todo is done', () => {
    list.markDoneAt(1);
    let representation = `---- Today's Todos ----
[ ] Buy milk
[X] Clean room
[ ] Go to the gym`;

    expect(list.toString()).toBe(representation);
  });

  test('toString returns the right representation of the string when all todos are done', () => {
    list.markAllDone();
    let representation = `---- Today's Todos ----
[X] Buy milk
[X] Clean room
[X] Go to the gym`;

    expect(list.toString()).toBe(representation);
  });

  test('forEach iterates over the elements in the list', () => {
    list.forEach(todo => todo.markDone());
    expect(list.allDone().toArray()).toEqual([todo1, todo2, todo3]);
  });

  test('filter returns the correct todos', () => {
    list.markDoneAt(0);
    expect(list.filter(todo => todo.isDone()).toArray()).toEqual([todo1]);
  });
});

