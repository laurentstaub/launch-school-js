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
});

