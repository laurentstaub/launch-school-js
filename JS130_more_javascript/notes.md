# The var statement
The `var` statement looks like the `let`or `const` statements but differs in a few ways.

* `var` creates a property on the global object when defined at the top level
```js
var bar = 42;
console.log(global.bar); // 42
let foo = 86;
console.log(global.foo); // undefined
```

* `var` is function scoped while `let` is block scoped
```js
function foo() {
  if (false) {
    var a = 1;
  }

  console.log(a); // undefined
}

foo();
```


# Rest and spread
## Rest parameter
The rest parameter syntax allows a function to accept an indefinite number of arguments as an array.

## Spread syntax
The spread syntax allows an iterable sucah as an array or string to be expanded in places where zero or more arguments (for function calls) or elements (for arrays) are expected, or an object expression to be expanded in places where zero or more key-value pairs are expected.

```js
function sum(...args) {
  return args.reduce((acc, val) => {
    return acc + val;
  });
}
```

# Garbage collection
## Stack and Heap
Most programming languages divide memory into 2 principal regions: the stack and the heap:

Stack: primitive values and references
Heap: everything else

The stack doesn't participate in garbage collection, primitive values don't get involved in garbage collection when they are stored on the stack. When a block is done running, the allocated stack memory gets returned to the system automatically. This is distinct from garbage collection.

Stack values are limited in size, so values like Strings and BigInts get stored on the heap or somewhere else. It looks like they are stored on the stack though.

Heap values are variable in size and we use reference counting here; when a reference count to a value reaches 0, we do garbage collection.

```js
function go() {
  let foo = {};
  let bar = { qux: foo };
  foo.xyz = bar;
}

go();
// Neither `foo`nor `bar` is eligible for GC as both objects still reference each other
```

Modern JS uses a mark and sweep algorithm to avoid this kind of problems but it causes other problems.


# Side Effects and Pure Functions
most functions should return a useful value or they should have a side effect, but not both. If you write functions that do both, you may have trouble remembering one of those -- either you'll forget about the side effect, or you'll forget that there's a return value that you need to examine. There are exceptions to the rule about mixing side effects and return values. For instance, if you read something from a database, you almost certainly have to return a value. If you read some input from the user's keyboard, you probably have to return a value. Yet, both operations -- accessing a database and reading user input -- are side effects.

## Side Effects
A function call that perfoms any of the following actions is said to have side effects:
1. It reassings any non-local variable
2. It mutates the value of any object referenced by a non-local varaible
3. It reads or writes to any data data entity that is non-local to the program
4. It raises an exception
5. It calls another function that has any side effects that are not confined to the current function.

ReMu Reads Ray Calls

```js
[1, 2, 3].map(number => 2 * number);

[1, 2, 3].map(number => {
  console.log(number);
  return 2 * number;
});
```

The first call to map does not have any side-effect. The second does have a side effect. If the function can have side effects when used as intended, then we say the function itself has side effects.

### Side effects through reassignment
```js
let number = 42;
function incrementNumber() {
  number += 1;
}
```

### Side effects through mutation
```js
let letters = ['a', 'b', 'c'];
function removeLast(array) {
  array.pop(); // side effect: alters the array referenced by letters
}

removeLast(letters);
```

### Side effects through Input/Output
```js
let readLine = require("readline-sync");

function getName() {
  let name = readLine.question("Enter your name: ") // side effect: output and input
  console.log(`Hello, ${name}!`); // side effect: output to console
}
```

```js
let date = new Date(); // side effect: accesses the system clock
let rand = Math.random(); // side effect: accessed random number generator
```

### Side effects though Exceptions
If a function can raise an exception and doesn't catch and handle it, it has a side effect. If the function catches and handles exceptions, it can still have side effects if the catch block itself has side effects.

### Side effects through other functions
* `console.log` has a side effect
* `readline.question` has multiple side-effects
* `new Date()` has a side effect (accesses system clock)
* `Math.random` has  aside effect (accesses the random number generator)

## Pure functions
1. Have no side effects
2. Given the same set of arguments, the function always returns the same value during the function's lifetime. This rule implies that the return value of a pure function depends solely on its arguments.

**The consistent return value is possibly the most important feature of pure functions. The fact that the return value is dependent solely on the arguments implies that nothing else in the program can influence the function during the function's lifetime.**

As with side effects, it's common to speak of functions as being pure or impure. However, it's more correct to talk about whether a specific function call is pure or impure.