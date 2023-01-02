"use strict";

const { SimpleLinkedList, Element } = require('./simple-linked-list.js');

describe('Simple Linked List', () => {
  test('element datum', () => {
    let element = new Element(1);
    expect(element.datum()).toBe(1);
  });

  test('element tail', () => {
    let element = new Element(1);
    expect(element.isTail()).toBe(true);
  });

  test('element next default', () => {
    let element = new Element(1);
    expect(element.next()).toBe(null);
  });

  test('element next initialization (4)', () => {
    let element1 = new Element(1);
    let element2 = new Element(2, element1);
    expect(element2.next()).toEqual(element1);
  });

  test('empty list size', () => {
    let list = new SimpleLinkedList();
    expect(list.size()).toBe(0);
  });

  test('empty list empty', () => {
    let list = new SimpleLinkedList();
    expect(list.isEmpty()).toBe(true);
  });

  test('pushing element on list #7', () => {
    let list = new SimpleLinkedList();
    list.push(1);
    expect(list.size()).toBe(1);
  });

  test('empty list 1 element #8', () => {
    let list = new SimpleLinkedList();
    list.push(1);
    expect(list.isEmpty()).toBe(false);
  });

  test('peeking at list #9', () => {
    let list = new SimpleLinkedList();
    list.push(1);
    expect(list.size()).toBe(1);
    expect(list.peek()).toBe(1);
  });

  test('peeking at empty list #10', () => {
    let list = new SimpleLinkedList();
    expect(list.peek()).toBe(null);
  });

  test('access head element #11', () => {
    let list = new SimpleLinkedList();
    list.push(1);
    let head = list.head();
    expect(head instanceof Element).toBe(true);
    expect(head.datum()).toBe(1);
    expect(head.isTail()).toBe(true);
  });

  test('items are stacked #12', () => {
    let list = new SimpleLinkedList();
    list.push(1);
    list.push(2);

    expect(list.size()).toBe(2);
    expect(list.head().datum()).toBe(2);
    expect(list.head().next().datum()).toBe(1);
  });

  test('push 10 items # 13', () => {
    let list = new SimpleLinkedList();

    for (let datum = 1; datum <= 10; datum++) {
      list.push(datum);
    }

    expect(list.size()).toBe(10);
    expect(list.peek()).toBe(10);
  });

  test('14. pop one item', () => {
    let list = new SimpleLinkedList();
    list.push(1);

    expect(list.pop()).toBe(1);
    expect(list.size()).toBe(0);
  });

  test('15. popping frenzy', () => {
    let list = new SimpleLinkedList();

    for (let datum = 1; datum <= 10; datum++) {
      list.push(datum);
    }

    for (let count = 1; count <= 6; count++) {
      list.pop();
    }

    expect(list.size()).toBe(4);
    expect(list.peek()).toBe(4);
  });

  test('16. from a: empty array', () => {
    let list = SimpleLinkedList.fromArray([]);

    expect(list.size()).toBe(0);
    expect(list.peek()).toBe(null);
  });

  test('17. from a: null', () => {
    let list = SimpleLinkedList.fromArray(null);
    expect(list.size()).toBe(0);
    expect(list.peek()).toBe(null);
  });

  test('18. from a: 2 element array', () => {
    let list = SimpleLinkedList.fromArray([1, 2]);
    expect(list.size()).toBe(2);
    expect(list.head().datum()).toBe(1);
    expect(list.head().next().datum()).toBe(2);
  });

  test('19. from a: 10 item array', () => {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let list = SimpleLinkedList.fromArray(arr);
    expect(list.size()).toBe(10);
    expect(list.peek()).toBe(1);
    expect(
      list
        .head()
        .next()
        .next()
        .next()
        .next()
        .next()
        .next()
        .next()
        .next()
        .next()
        .datum()
    ).toBe(10);
  });

  test('20. to a: empty list', () => {
    let list = new SimpleLinkedList();
    expect(list.toArray()).toEqual([]);
  });

  test('21. to a: of 1 element list ', () => {
    let list = SimpleLinkedList.fromArray([1]).toArray();
    expect(list).toEqual([1]);
  });

  test('22. to a: of a 2 element list', () => {
    let list = SimpleLinkedList.fromArray([1, 2]).toArray();
    expect(list).toEqual([1, 2]);
  });

  test('23. reverse 2 element list', () => {
    let list = SimpleLinkedList.fromArray([1, 2]);
    // reversedList and list need not be the same object
    let reversedList = list.reverse();

    expect(reversedList.peek()).toBe(2);
    expect(reversedList.head().next().datum()).toBe(1);
    expect(reversedList.head().next().isTail()).toBe(true);
  });

  test('24. reverse 10 element list', () => {
    let data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let list = SimpleLinkedList.fromArray(data);
    expect(data.reverse()).toEqual(list.reverse().toArray());
  });

  test('25. roundtrip 10 element array', () => {
    let data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let list = SimpleLinkedList.fromArray(data).toArray();
    expect(list).toEqual(data);
  });
});
