- Pass by reference and pass by value
- Array mutation
- Variable scoping
- Variable shadowing
- Variable as pointers
- Type coercion
- Mutability / Immutability
- Object / array iteration


# JS109 STUDY GUIDE

## Declarations, initialization, assignment, and re-assignment

On line X, we declare the global variable `var` and initialize it with the value ``.

On line X, we declare the global variable `var` and initialize it with a reference to the array `[ ]`.

On line X, we declare the global variable `var` and initialize it with a reference to the object `{} }`.

**From the book**

A variable declaration is a statement that asks the JavaScript engine to reserve space for a variable with a particular name. Optionally, it also specifies an initial value (initialization) for the variable. JavaScript supplies several ways to declare variables, but the preferred way in modern JavaScript uses the let keyword

Note that regardless of whether we provide a value in a declaration, the variable is initialized. If we don't provide an explicit value, that initial value is `undefined`.

There is a subtle difference in terminology surrounding the `=` token. When used in a declaration, the `=` is just a syntactic token that tells JavaScript that you're going to supply an initial value for the variable. However, in an assignment, the `=` is called the assignment operator.

*Reassignment*

After a variable has been assigned, it can be re-assigned. This means that the variable can be made to refer to a new value. A key concept to understand is that when we re-assign a value to a variable, we are NOT changing the original value - we are putting a completely new value in the variable.

**From sitepoint**

Declaration is the action to create a variable, using const, let or var and a variable name. It is the action of adding a variable to the Lexical Environment.

var are implicitly assigned with a value of undefined, this is not the case for let and const.
[https://www.sitepoint.com/how-to-declare-variables-javascript/](https://www.sitepoint.com/how-to-declare-variables-javascript/)

1. **Declaration**: The variable is registered using a given name within the corresponding scope global/block/function.
2. **Initialization**: When you declare a variable it is automatically initialized, which means memory is allocated for the variable by the JavaScript engine.
3. **Assignment**: This is when a specific value is assigned to the variable.
```jsx
let variable1;     // Declaration and initialization
variable1 = 1;     // Assignment
```

## Variable scope, especially how variables interact with function definitions and blocks

A variable's scope determines where it is available in a program. The location where you declare a variable determines its scope. In JavaScript, variables declared with the let or const keywords have block scope. A block is a related set of JavaScript statements and expressions between a pair of opening and closing curly braces.

A variable scope is the part of the program where the variable is available. At function definition level, if a parameter is set, the passed-in argument will be available in the function body, but not outside of it. This true for let, const and var. For block statements, any variable declared with let or const in that block will be available only in that block. var , on the other hand, is not block scoped, meaning that, if defined in a block, it will be available out of that block.

There are two types of variables, based on where they are accessible: global and local variables. Global variables are available throughout a program, while local variables are confined to a function or a block. The keyword used (`let` and `const`) and the location where the variable is declared combine to determine if the variable is global or local.

Variable Scope Rules
* Rule 1: outer scope variables can be accessed by the inner scope
* Rule 2: inner scope variables cannot be accessed in the outer scope
* Rule 3: peer scopes do not conflict:
* Rule 4: nested functions have their own variable scope
* Rule 5: inner scope variables can *shadow* outer scope variables


## Primitive values, objects, and type coercions

JavaScript has five so-called primitive data types:

String
Number
Undefined
Null
Boolean
Every type that is not a primitive type is an object type. Data type values can be represented by literals. A literal is any notation that lets you represent a fixed value in source code. 

There are 7 primitive data types: number, string, boolean, undefined, null, bigInt and symbol. A primitive has a fixed size in memory. in JS, everything that is not a primitive is an object. It includes objects, functions and arrays that all could be of variable size in memory. Their values can not be stored in a fixed memory spot (eight bytes), so we just store a reference to the object.

```js
typeof 4;           // number
typeof NaN;         // NaN
typeof '4';         // string
typeof true;        // boolean
typeof undefined;   // undefined
typeof null;        // object !!!!!
```

Type coercion occurs when we change the type of a value to another type. There are 2 kinds of coercion: implicit coercion and explicit coercion. Implicit coercion happens when we use operators like the loose equality operator `==` or the binary operator `+` that could change the type of the values being compared. Explicit coercion happens when we use constructors (`Number` , `String` ), methods (`parseInt`, `parseFloat`, ...) or unary operators (`+`, `!!`) with the clear intent of converting a value from one type to another one.


## Object properties

An object is a collection of properties, which are made of key value pairs. If a value happens to be a function, it is called a method. The properties contained by the object are delimited by the braces `{}`. The keys are strings, even when quotes are omitted. The values can be of any type.

There are 2 ways to access properties, through the dot notation or through the bracket notation.
```js
let object1 = {
  key1: 'value1',
  key2: 2,
  key3: function () { console.log('Hi') }    // method
}

// To access the properties values with the dot notation:
object1.key1;
object1.key2;
object1.key3;

// To access the properties values with the bracket notation:
object1['key1'];
object1['key2'];
object1['key3'];

// To run the method stored in object1.key3:
object1.key3();
object1['key3']();
```

## Mutability vs. immutability vs. const

**Immutability** refers to the fact that in JavaScript, primitive values can not be mutated**, i.e., that its various components can not be changed**. If we want to mutate a primitive value assigned to a variable, we need to re-assign the variable to a new value. We therefore need to initialize and assign a new memory spot for the new value. 

Objects, on the other hand, are mutable, we can modify their content (keys, values, elements) without having to reassign them to a new object. 

`const` makes re-assignment impossible for both objects and primary reviews. When dealing with an object declared with `const`, only the reference to the object in memory can not be changed, so the object is still mutable. To make the object immutable, we can use Object.freeze() (although only shallow freezes).

## Loose and strict equality

These operators are used to compare different values and check if the operands are equal. When values are of the same type, `==` and `===` return the same result. There is a difference when values are not of the same type: strict equality sign `===` will not coerce the value to another type, while the loose operator `==` will, this is what we call implicit coercion. Relational operators (`>`, `<`) are only non strict!

Things to remember about loose equality comparisons:
1. When a number is compared with a string using `==`, the string is coerced into a number
2. When a boolean is compared with any other value, it is coerced into a number and compared again using `==` operator
3. When an object is compared with a primitive value, the object is coerced into a primitive value and compared again using the `==` operator
4. A `==` comparison of undefined with null evaluates as true.


## Passing arguments into and return values out of functions

During a function invocation, argument expressions are evaluated and become the arguments to the functions. Arguments values are assigned to the parameters, and references to parameters in the function body will refer to the arguments values.

When a function is invoked with fewer arguments than the declared parameters, the additional parameters are set to their default value or `undefined`.

By default, the return value of a function is `undefined`. Otherwise, it returns the expression on the right of a return statement, or `undefined` if the return statement has no value.

```jsx
// Simple function passing a single argument
function sayHello(name) {     // parameter name gets assigned with 'Laurent'
  console.log(`Hello, ${name}`);    // logs 'Hello, Laurent'
}

sayHello('Laurent');   // String 'Laurent' is passed to the function

// Function called with lesser arguments
function sayHello(firstName, lastName) {    // parameter lastName gets assigned with 'undefined'
  console.log(`Hello, ${firstName} ${lastName}`);    // logs 'Hello, Laurent undefined'
}

sayHello('Laurent');  // String 'Laurent' is passed to the function, missing one argument

// default function return
function sayHello(name) {
  console.log(`Hello, ${name}`);    // no return value is being provided
}

var returnedValue = sayHello('Laurent');    // This will log 'Hello, Laurent' and assign the return value to `returnedValue`
console.log(returnedValue);    // logs 'undefined'

// Functions return value
function sayHello(name) {
  return `Hello, ${name}`;    // we have a return value
}

var returnedValue = sayHello('Laurent');    // we assign the return value of the function to returnedValue
console.log(returnedValue);    // logs the function return value 'Hello, Laurent'
let a = 'a';

function test() {
  console.log(a);
}

test(a);
```

## Working with Strings

It is often easier to convert strings to an array to work on them. You can use the `split()` to convert a string to an array. But some operations that are possible on strings. 

Note: every time we do an operation on strings, we return a new string as strings are not mutable.

Accessing string elements:

```jsx
"Hello"[1];    // 'e'
"Hello"[-1];    // undefined
```

Here is a list of string methods to consider when working with strings:

`split()`: as mentioned above, it is a good way to split a chain of characters to its character components into a newly created array
    
  ```jsx
  let fullString = 'Hello';
  let slicedString = fullString.split('');
  slicedString    // ['H', 'e', 'l', 'l', 'o'];
  ```

`slice()`: can be useful to extract a part of a string to a new string
    
  ```jsx
  "Hello".slice(0, 4);    // 'Hell'
  ```

`includes()`: useful to check if a string contains certain characters
    
  ```jsx
  "Hello".includes("o");    // true
  ```

`toLowerCase()` and `toUpperCase()`: functions that are useful to change the case of a string.
    
  ```jsx
  "Hello".toLowerCase();    // "hello"
  "Hello".toUpperCase();    // "HELLO"
  ```

## Working with Arrays, especially the iteration methods (forEach, map, filter, and find)

`typeof` an array is `object`. If you want to know if a value is an array, use `Array.isArray`.

 If you change an array's length property to a new, larger value, the array expands to the new size. The new elements do not get initialized.

```
forEach
```

  - Works on an array
  - Returns undefined
  - Takes a callback function as argument
  - `forEach` executes the provided callback function once for each array element. We are interested in the side-effects of the callback, not the return value.

  ```jsx
  const pets = ['dog', 'cat'];
  pets.forEach(pet => console.log(pet));
  // the call to console.log will output 'dog' and then 'cat' to the console.
  map
  ```

  - Works on an array
  - Returns a new array
  - Takes a callback function as argument
  - `map` returns a new array by replacing each element with the return value of the provided callback function on each of these element.

  ```jsx
  const petsNumber = [ 0, 1 ];
  const newPetsNumber = petsNumber.map(number => number +=1 );  // returns [ 1, 2 ];
  filter
  ```

  - Works on an array
  - Returns a new array
  - Takes a callback function as argument
  - `filter` returns a new array with the elements for which the callback, when called on these elements, return a truthy value
    
```
find
```

  - Works on an array
  - Returns value of the element or `undefined`
  - Takes a callback functions as argument
  - `find` returns the value of the first element that returns a truthy value when callback is called on this element
    
```
includes
```

  - Works on an array
  - Returns true or false
  - The includes method determines whether an array includes a given element
  - Internally, includes uses `===` to compare elements of the array with the argument. That means we can't use includes to check for the existence of a nested array or an object unless we have the same object or array we're looking for

```
every
```

- Works on an array
- Returns true or false
- Takes a callback as argument
- `every` returns true when the callback returns a truthy value when called on each element of the array. Otherwise, it returns false as soon as a falsy value is returned by the callback.


## Working with Objects; accessing keys and values of an Object as array

An object is a composite value. It aggregates multiple key/value pairs (properties) that can be retrieved by the key string. It is a string to value mapping.

We can access an object property through:

- Dot notation: object.key Can't be used for variables
- Bracket notation: `object[key]` to use a variable or `object['key']`

We can use the following methods to access the keys and values of an object as arrays:

`Object.keys()` returns a new array that contains the keys of the object passed in.

`Object.values()` returns a new array that contains the values of the object passed in.

```
Object.entries()
```

## Arrays are objects
Arrays are an ordered, indexed list. Each element can have a value of any type (they are heterogenous), it is accessible through the bracket notation array[index].

Keys are non-negative integers
We can add properties on an array


## Understand the concepts of pass-by-reference and pass-by-value

Pass by reference means that the reference to an object gets copied in the function body, so that the variable inside the function body points to the same object as the passed argument. 

Pass-by-value means that the value of the variable passed in is copied when used in the function body. The outside variable will therefore not be changed whatever happens inside the function.

## variables as pointers

When dealing with objects, variables act as pointers to memory locations that hold values of an object or other pointers.

```jsx
const test = arr => {
  arr = ["ByeBye"];
  arr.push("World!");
  return arr;
}

test(greeting);
console.log(greeting);
```
On line 2 parameter `arr` is reassigned to the new array `["ByeBye"]`. That is, parameter `arr` no longer references the
place in the computer memory where the object `greeting` variable points to.

From now on, we can't mutate the object variable `greeting` points to, because `arr` now references a different object.

## console.log vs. return
`console.log()` is a method that outputs the passed-in argument(s) to the console

A `return` statement ends the function execution and specifies an expression value to be returned to the function caller. If omitted, the function returns `undefined`. 

```jsx
function sayHello(name) {     // parameter name gets assigned with 'Laurent'
  console.log(`Hello, ${name}`);    // This will log 'Hello, Laurent'
}

sayHello('Laurent');   // `Hello, ${name} has been logged, the function returns undefined

function doNothing() {};
let returnedValue = doNothing();
console.log(returnedValue);    //  undefined
```

## Truthiness vs. boolean
boolean is a type of primitive values in javascript. boolean values are `false` and `true`. Truthiness refers to the fact that values get coerced / evaluated to boolean values in a context where JS requires a boolean value to execute. All values return true, except 0 - false - undefined - NaN - null - "".

```jsx
// BOOLEAN
if (true) console.log("We're good");    // logs `We're good`

// TRUTHINESS
if ('this is true') console.log("We're still good");    // logs `We're still good`
// `this is true` will get evatualed to true as a non-empty string

if (NaN) console.log("Nope.");    // logs nothing
// `this is true` will get evatualed to true as a non-empty string

// Now, to prove that what we are saying
// BOOLEAN
if (true === true) console.log("We're good");    // logs `We're good`
if ('this is true' === true) console.log("We're good");    // logs nothing
if (NaN === false) console.log('Nope.');
```

## Function definition and invocation
Before we can invoke it, a function must be declared with the function keyword, function name, parentheses with list of parameters and the function body between curly braces. This is the first type of function definition that people usually learn. 

There are also function expressions and arrow functions (see below).

Functions are called by typing their name followed by parentheses that eventually contains arguments. We pass the values or the references from these arguments to the function and assign them to the function's parameters.

## Function declarations, function expressions, and arrow functions
There are 3 ways to define a function: function declaration, function expression and arrow function.

```jsx
function functionName(zeroOrMoreArguments...) {
  // function body
}
```

A function expression looks a lot like a function declaration, but we're saving it to a variable. We can do this because functions are first-class functions in JS. One difference with declaration: function expression can not be used before they are defined.

```jsx
let greetPeople = function () {
  console.log("Good Morning!");
};
```

**Any function definition that doesn't have the word function** at the very beginning of a statement **is a function expression**. Even wrapping what looks like a function declaration in parentheses creates a function expression:

```jsx
(function greetPeople() { // This is a function expression, not a declaration
  console.log("Good Morning!");
});
```

The third kind of function definition is arrow functions. It looks like this:

```jsx
let greetPeople = () => console.log("Good Morning!");
greetPeople();
```

Arrow functions can omit the return statement when and only when the function body contains  a single expression.

## Implicit return value of function invocations
By default, the return value of a function is `undefined`, it is its implicit return value. We can choose to have the function return another value, an explicit return value by using the keyword `return` before the value to return.

## Side-effects
A function is said to have side effects when (**ReMu Reads Ray Calls**):

- It **re**assigns any non-local variable
- It **mu**tates the value of any object referenced by a non local variable
- It **reads** from or writes to a file, network connection, browser (console.log, reading input)
- It **rai**ses an exception without handling it
- It **calls** another function that has side-effects

## Naming conventions (legal vs idiomatic)
Legal names are all the possible names. Idiomatic refers to the commonly accepted names.

```jsx
fizzBUZZ   // Legal but not idiomatic
fizzBuzz   // Idiomatic
m00n       // Idiomatic
parseURL   // Idiomatic
Employee   // Legal but not idiomatic
```