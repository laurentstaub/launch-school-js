"use strict";
/* PEDAC

input:
output:

Two Classes in file simple-linked-list.js
- Element
- SimpleLinkedList

  test('element tail', () => {
    let element = new Element(1);
    expect(element.isTail()).toBe(true);
  });

linkedList ???
  data: 1
  next: ??

    a class or static method that creates a new SimpleLinkedList instance from a given array argument.

    a class or static method that converts a SimpleLinkedList instance into an array. The datum from each link in our list should be an element in the returned array.

    a method that adds its argument to the list.

    a method that removes the head of the list (the most recently added item on the list).

    a method that returns the Element at the head of the list.

    a method that returns the size of the list.

    a method that returns a boolean based on whether or not the list is empty.

    a method that returns the data value of the head element. => `peek()`

    a method that returns the list but in reverse order.


*/

class Element {
  constructor(number, nextElement = null) {
    this.number = number;
    this.nextElement = nextElement;
  }

  datum() {
    return this.number;
  }

  next() {
    return this.nextElement;
  }

  isTail() {
    return this.next() === null;
  }
}

class SimpleLinkedList {
  static fromArray(array) {
    let list = new SimpleLinkedList();
    if (array !== null) array.slice().reverse().forEach(number => list.push(number));
    return list;
  }

  constructor() {
    this.list = [];
  }

  size() {
    return this.list.length;
  }

  toArray() {
    return this.list.slice().map(element => element.datum());
  }

  reverse() {
    let numberList = this.toArray().reverse();
    return SimpleLinkedList.fromArray(numberList);
  }

  isEmpty() {
    return this.size() === 0;
  }

  head() {
    return this.list[0];
  }

  push(number) {
    this.list.unshift(new Element(number, this.head()));
  }

  pop() {
    // return this.list.pop().datum();
    return this.list.shift().datum();
  }

  peek() {
    if (this.size() === 0) return null;
    return this.head().datum();
  }
}

module.exports = { SimpleLinkedList, Element };