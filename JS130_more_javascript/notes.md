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

# Hoisting
JS engines operate in two main phases: a creation phase and an execution phase. When the execution phase begins, JavaScript knows what variables exist and where they are in scope. From the developer's perspective, the code acts like the declarations were moved to the top of their respective scope. In particular, function-scoped declarations are moved to the function's beginning, and block-scoped declarations are moved to the block's start. We call this process hoisting.

## The Temporal Dead Zone
When a `var` variable is hoisted, JavaScript gives it an initial value of `undefined`. If you try to access the value assigned to a `var` variable before the original statement with the var declaration gets executed, JavaScript returns `undefined`.
```js
console.log(bar); // undefined
var bar = 3;
console.log(bar); // 3
```

When `let` and `const` variables are hoisted, they are not given an initial value at all. Instead, they are left in an "unset" state; that is, they are "not defined." (Don't say "undefined," though - that's confusing since undefined is also a value.) Such unset variables are said to be in the **Temporal Dead Zone**, or the TDZ. Such variables remain in the TDZ until the initialization code runs during the execution phases.

## Hoisting for Function Declarations
JavaScript also hoists function declarations to the top of the scope. In fact, it hoists the entire function declaration, including the function body. Function declarations have function scope.

## Hoisting for Classes
The class name gets hoisted, but the definition of the class does not. Much like `let` and `const`, `class`declarations live in the TDZ until their definition code is executed.

## Best Practices
* Whenever possible, use let and const instead of var
* If you must use var, declare all of the variables at the top of the scope
* If you can use let and const, declare them as close to their first usage as possible
* Declare functions before calling them

# Scopes
## Declared vs visibility vs lexical scope
* Declared Scope: refers to how a particular identifier is declared (let vs var, block vs function scope)
* Visibility Scope: where a particular identifier -- a variable, function, or class name -- is available for use by your code (global vs local scope)
* Lexical Scope: refers to the lexical structure of the code (inner vs outer scope)

# Strict mode
When to use it:
* When creating new function in an existing codebase
* When creating a new project / codebase


Strict mode makes three significant changes to JavaScript semantics:
* It eliminates some silent errors that occur in sloppy mode by changing them to throw errors instead. Silent errors occur when a program does something that is unintended, but continues to run as though nothing is wrong. This can lead to incorrect results or errors much later in execution that are subsequently difficult to track down.
* It prevents some code that can inhibit JavaScript's ability to optimize a program so that it runs faster.
* It prohibits using names and syntax that may conflict with future versions of JavaScript.

"use strict"; is called a pragma. We put it on top, we can use it inside a function. Once you enable strict mode, you can't disable it later in the same program or function.

```js
function foo() {
  // All code here runs in sloppy mode
}

function bar() {
  "use strict"; // All code here runs in strict mode
  foo(); // This invocation is strict mode, but `foo` runs in sloppy mode
  // All code here runs in strict mode
}
```

## Implicit Global Variables
The strict mode prevents the implicit creation of global variables.
```js
"use strict";

function foo() {
  bar = 3.1415; // ReferenceError: bar is not defined
}

foo();
console.log(bar);
```

This behavior also helps identify misspelled names. If you declare a variable with one name, then later try to reassign it with a misspelled name, sloppy mode will create a new global variable.

## Implicit Context In Functions


# Closure
The variables that the function has access to when it was defined
Closure is the combination of a function and the lexical scope where that function was defined.
* Variables that are defined inside the function are not part of the clodure 'envelope'
* Variables that are defined in the lexical scope of the function are not used within that function are nt part of the closure 'envelope'
* The variables that are included in the closure 'envelope' are pointers

```js
const var3 = "var3";

function func() {
  let var1 = "var1";

  return function innerFunc() {
    let var2 = "var2";

    console.log(var1); // closure
    console.log(var2); // scope
    console.log(var3); // scope and closure
  }
}

const executeFunc = func();
executeFunc();
```

What is the relationship between closure and scope?
When a function is invoked and sees a new variable, it looks in the local scope for the variable. If it does not fint it, it will look for variables in outer scopes. A function can access both the variables in its inner and outer scope. The function can use variables from the lexical scope where the function was defined. Even if those variables aren't in the lexical scope where you invoke the function, it can still access them.

```js
function makeCounter() {
  let counter = 0;

  return function() {
    counter += 1;
    return counter;
  }
}

let incrementCounter = makeCounter();
console.log(incrementCounter()); // 1
console.log(incrementCounter()); // 2
```
`counter` is private, it is not accessible from the global scope. 

## Partial Function Application
We have a partial function application when a function returns another function that goes through a reduction of the number of arguments.

```js
function add(first, second) {
  return first + second;
}

function makeAdder(first) {
  return function(second) {
    return add(first, second);
  }
}

let addFive = makeAdder(5);
```

# Immediatly Invoked Function Expressions
An IIFE is a function expression that is invoked at the same time it's defined.

```js
(function() {
  console.log('hello');
})();
```

We can omit the parentheses around an IIFE when the function definition is an expression that doesn't occur at the beginning of a line.

```js
let foo = function() {
  return function() {
    return 10;
  }() + 5;
}();

console.log(foo);       // => 15
```

```js
((first, second) => first * second)(5, 6); // 30
```

# Shorthand notation
## Concise Property Initializer
```js
function returnObject(one, two) {
  return {
    one,
    other: two,
  };
}
```

## Concise Methods
```js
let obj = {
  foo() {},
}
```

## Object Destructuring
Used to create new properties on an object from the properties of another object. Order doesn't matter.
```js
let obj = {
  foo: "foo",
  bar: "bar",
  qux: 42,
};


let { foo } = obj;
let { bar, qux: myQux } = obj;
```

## Array Destructuring
Used to create new variables from an array. Order matters.
```js
let one = 1;
let two = 2;
let three = 3;

let [ num1, num2, num3 ] =  [one, two, three];

console.log(num1);   // 1
console.log(num2);   // 2
console.log(num3);   // 3
```

Swap values.
```js
let one = 1;
let two = 2;

[ one, two ] =  [two, one];

console.log(one);   // 2
console.log(two);   // 1
```

## Spread Syntax
The spread syntax uses ... to "spread" the elements of an array or object into separate items. Transforms an array into its elements.

```js
// Create a clone of an array
let foo = [1, 2, 3];
let bar = [...foo];
console.log(bar);         // [1, 2, 3]
console.log(foo === bar); // false -- bar is a new array

// Create a clone of an object
let foo = { qux: 1, baz: 2 };
let bar = { ...foo };
console.log(bar);         // { qux: 1, baz: 2 }
console.log(foo === bar); // false -- bar is a new object

// Concatenate arrays
let foo = [1, 2, 3];
let bar = [4, 5, 6];
let qux = [...foo, ...bar];
qux;  // => [1, 2, 3, 4, 5, 6]

// Merge objects
let foo = { qux: 1, baz: 2 };
let xyz = { baz: 3, sup: 4 };
let obj = { ...foo, ...xyz };
obj;  // => { qux: 1, baz: 3, sup: 4 }

// Insert an array into another array
let foo = [1, 2, 3]
let bar = [...foo, 4, 5, 6, ...foo];
bar; // => [1, 2, 3, 4, 5, 6, 1, 2, 3]
```

## Rest Syntax
In some ways, you can think of rest syntax as the opposite of spread syntax. Instead of spreading an array or object out into separate items, it instead collects multiples items into an array or object.

```js
let foo = [1, 2, 3, 4];
let [ bar, ...otherStuff ] = foo;
console.log(bar);        // 1
console.log(otherStuff); // [2, 3, 4]
```

```js
function maxItem(first, ...moreArgs) {
  let maximum = first;
  moreArgs.forEach(value => {
    if (value > maximum) {
      maximum = value;
    }
  });
}
```

# Modules
We'll focus on CommonJS modules (Node modules) and JS modules, also known ES modules. Modules are useful to split a program into understandable bits. It also help to keep data private in each module.

## CommonJS Modules
```js
function logIt(string) {
  console.log(string)
}

module.exports = logIt;
```

For several items to export
```js
module.exports = {
  logIt,
  setPrefix,
}
```

```js
const logIt = require("./logit");
```

```js
const { logIt, setPrefix } = require("./logit");
```

# Exceptions

```js
try {
  try {
    // some code
    // other code 
  } catch (error) {
    // do something simple (logging the error)
    // re-throw `error` or throw a new exception.
  }

  // more code 

} catch (error) {
  // Do something else
}

// more code outside of `try`
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