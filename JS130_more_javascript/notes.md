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
* When creating new function in an existing codebase (function level strict mode)
* When creating a new project / codebase

You cannot create global variables implicitly.
Functions won't use the global object as their implicit context.
Forgetting to use this in a method raises an error.
Leading zeros on numeric integers are illegal.

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
In strict mode, using function call syntax on a method sets this set to undefined. Thus, this.a raises an exception:

```js
"use strict";

let obj = {
  a: 5,
  go() {
    this.a = 42; // TypeError: Cannot set property 'a' of undefined
  },
};

let doIt = obj.go;
doIt();
console.log(obj.a); // 5
```

## Forgetting to Use `this`
```js
"use strict";

function Child(age) {
  this.age = age;
};

Child.prototype.setAge = function(newAge) {
  age = newAge; // ReferenceError: age is not defined
}

let leigh = new Child(5);
leigh.setAge(6);
console.log(leigh.age);
```

## Leading Zeros
If you use a literal integer that begins with 0 but doesn't contain the digits 8 or 9, sloppy mode JavaScript interprets it as an octal number. This behavior is often undesirable, though its less troublesome now that modern versions of JavaScript default to decimal when using parseInt. In some older versions, parseInt("01234567") would return 342391, which could be a problem if the string came from an external source (such as the keyboard). 

With strict mode, numbers that look like octal numbers raise an error

```js
"use strict";

console.log(1234567);   // 1234567
console.log(0);         // This is okay
console.log(0.123);     // So is this
console.log(01234567);  // SyntaxError: Octal literals are not allowed in strict mode.
console.log(01.23);     // SyntaxError: Numbers can't begin with 0
console.log(-01234567); // SyntaxError: Octal literals are not allowed in strict mode.
console.log(-089);      // SyntaxError: Numbers can't begin with 0
```

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

Partial Function Application is sometimes overkill. Rather than creating a makeErrorHandlerFor function, you can use bind to perform partial function application. In most cases, bind is all you need.

```js
let url = "https://example.com/foo.txt";
download(url, errorDetected.bind(null, url));
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

# Tests
Why test? At he beginning, we should write tests to avoid **regression**, that is to prevent code that was previously working to stop working.

For jest testing, file needs to end with `.test.js`. It requires a config file: `touch jest.config.js`.

* Test suite: entire set of tests that accompanies the program
* Test: a specific situation or context that we're attepting to test. Similar to specs
* Assertion: verification step that confirms that the program does what it should.

**describe**: method that takes a string and a callback. Can contain several test methods.
**test**: also takes a string and a callback, defines a new test. Within each test, we need to make our own assertions.
**expect**: assertion starts with the expect method. The first argument of this method is the value we want to assert, the **actual value**. The `expect` method returns an object that has matchers methods. **Matchers** methods compare the actual value passed to `expect` with the expected value. Examples of matchers: `toBe`, `toBeNull`, `toBeLessThan`, `toBeLessTahnOrEqual`, `toMatch`, `not.toMatch`, `toContain`, ...

We can skip tests with the `test.skip` or `xtest` (alias for the `test` method). Useful if we do not want to run a test yet. Skiiped tests appear in yellow.

## Matchers
Main categories of matchers:
* `toBe`: fails unless actual value === expected value
* `toEqual`: same as `toBe` but can also test for object equality
* `toBeUndefined`: fails unless the actual value is `undefined`. Same as `toBe(undefined)`
* `toThrow`: fails unless the expression passed in to `expect`raises/throws an error
* `toBeNull`: fails unless the actual value is `null`. Same as `toBe(null)`.
* `toBeTruthy`: fails unless the actual value is truthy.
* `toContain`: fails unless the given array includes a value. Also for strings.

[Link to the full list](https://jestjs.io/docs/expect)

## SEAT Approach
So far, we've repeated over and over the same code. In large projects, we would:
* Set-up the necessary objects
* Execute the code against the object we're testing
* Assert the results of execution
* Tear down and clean up any lingering artifacts

We can use the `beforeEach` method.

```js
describe("The Car class", () => {
  let car;
  beforeEach(() => {
    car = new Car();
  });
}
```

We declare the variable `car` outside the beforeEach statement because we want the tests to be able to access it. `beforeEach`is called before each test.

## Code Coverage
Calculated on the basis of the number of functions tested.
```
jest --coverage todolist.test.js
```

# The Node Toolbox
## Setting Up the Project Directory
The directory name can be pretty much anything but it should only use lowercase letters, digits, underscores and hyphens, to avoid bugs.

* Create directory not under another git directory to avoid conflicts
* Project is a collection of one or more files used to develop, test, build, and distribute software.

Most Node-based projects follow a standard layout. In particular:
* Some specific files and directories must be present
* Some kinds of data must be in specific locations
* Some data mist use well-defined formats

* Create repo in github
* Create local directory
  
```
mkdir todolist_project
cd todolist_project
```
* Go back to the github repo and link repo through the Quick setup
* Add the `node_modules` to the `.gitignore` file
* Add the necessary files

Node projects typically have a strict organization. Specifically, developers expect to find test code in a test directory and code files in the lib directory. Move the files where they belong:
```
mkdir lib test
mv todolist.js lib
mv todo.js lib
mv todolist.test.js test
```

Make sure the modules imports have the right path name.
```
├── lib
│   ├── todo.js
│   └── todolist.js
└── test
    └── todolist.test.js
```

## Using npm
A standard Node installation includes a vast library of code that is always available to your programs. Programming is a repetitive process, which leads to plenty of reusable code in many projects. Thus, developers often package the reusable code and make it available to the broader developer community. The npm database hosts hundreds of thousands of such free code packages. You can download and use these packages in your projects.

### Node Packages
You can import some packages into your programs, and use others from the terminal command line. You can even use some packages in both ways. The `npm` command, which comes bundled with node, manages your packages. Note that there's a difference in the way we use these packages.

Ex: `eslint`, `jest`, `readline-sync`

### Local vs Global Packages
Before starting this section, be sure you do not have a node_modules directory, a package.json file, or a package-lock.json file in your home directory. 
```
cd $HOME
rm -fr node_modules package.json package-lock.json
cd -
```

To install a package locally, use the npm install command without the --global option.
```
# Make sure you're in the todolist_project folder
npm install lodash --save
```

This command downloads and installs the lodash package in the node_modules directory. However, where is node_modules located? The npm command looks for an existing directory by that name in the current folder. If it doesn't find one, it looks in the parent directory. If it doesn't find it there, it keeps searching up the directory hierarchy until it finds one. If it doesn't find one, it creates one in the directory where you ran the npm install command. This directory search is why you should never nest your project directory inside a directory that already contains a node_modules directory. 

An npm package is simply a node project with files and sub-directories inside it. We can verify that by listing the contents:
```
cd node_modules
cd lodash
ls
```

We import local package through the use of the `require` function.
```
const _ = require('lodash');
console.log(_.chunk([1, 2, 3, 4, 5, 6, 7, 8], 2));
```
Or if we just need a specific function
```
const chunk = require('lodash/chunk');
console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8], 2));
```
If files are not independent
```
const chunk = require('lodash').chunk;
console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8], 2));
```

**The package.json and package-lock.json**
`npm install` isn't the preferred way to install npm packages, especially when a project has multiple contributors or needs to run on different machines. Typically, your project should have a `package.json` file that lists all the packages that your project needs, together with the versions of each package. The file also provides a convenient place to store some other configuration settings.

To initialize (create and populate) a package.json file, we'll run `npm init`. The package.json file is, in effect, a configuration file written in JSON format.

Using `npm install` will install all dependencies from the package.json file. It also creates a package-lock.json file. The package-lock.json file shows the precise versions of the packages that npm installed. It also shows the dependencies of each package and the version of each dependency. Npm and the package.json file follow semantic versioning. For example, in package.json, the versions that we've specified are the major versions, e.g., "4". Node then chooses a specific minor and patch version that is compatible with the rest of the dependencies and adds that information to package-lock.json.

The next time we run npm install it'll look at package-lock.json and install the specific versions specified there. That is why you must add package-lock.json to your git repo. You want all contributors and users of your package to install the correct versions and avoid versioning problems.

**Adding a New Dependency**
You can add a new dependency to your project and package.json in one of two ways:
* Directly add the dependency to package.json
* Use npm install

You don't have to edit package.json directly. Instead, just run npm install with the package name and the --save option to install the package and save it to both package.json and package-lock.json.
```
npm install lodash --save
```
Or
```
npm install lodash -S
```

**dependencies vs devDependencies**
Sometimes, your project only needs a package during development. Such packages include code linters, debuggers, and minifiers. These tools aren't part of the final application but are useful or necessary during development. Ideally, you should only install such tools in the development environment, not in production. Fortunately, package.json lets you identify such development dependencies by adding a devDependencies property. The easiest way to do that is to use npm install with the --save-dev option:
```
npm install eslint --save-dev
```

**Running Local Executable Packages**
Since ESLint is an executable package, we'll run it from the terminal. However, if you try to run eslint filename.js, it will use the globally installed eslint executable. There are several ways to run a local npm executable package, but the simplest way is to precede the executable's name by npx. If it can't find the package (eslint) locally or globally, it downloads and uses a temporary version of the named package.

```
npx eslint lib/todolist.js
```

**Deleting a Dependency**
To delete a dependency, use the npm uninstall command:
```
npm uninstall lodash                    remove the package but not in package.json
npm uninstall lodash --save             remove from the dependencies as well
npm uninstall eslint --save-dev         remove the devDependencies as well
```

You can also use npm prune to remove dependencies. This command is useful when you manually remove some dependencies from package.json and want to remove the packages from node_modules. For example, suppose that we edit package.json and delete morgan from the dependencies list, then run npm prune. Since morgan is no longer a dependency, npm prune removes it from node_modules.

As a general rule, you should install almost all of your packages locally in your project's node_modules directory. We recommend this practice highly. It ensures that projects that need specific versions of packages have them locally available. If another project needs a different version of a package, you can install that version in its node_modules directory. Since each package is local to the project, each project is free to use the version it needs.

Not all node packages require local installation. For instance, some packages provide command-line executables, like Heroku (which we'll meet in a later course). You don't often need different versions of Heroku for different projects. Thus, such packages are typically installed as global packages, though you can install them locally.

To install a package globally, use the -g flag with npm install:
```
npm install heroku -g
```
On UNIX systems, node installs such packages in /usr/local/lib/node or /usr/local/lib/node_modules. Node also moves the heroku executable to a directory that is part of your PATH environment variable. Thus, when you run the heroku command from the command line, the system can find the executable and run it.

Despite the convenience of running commands globally, it can cause problems. For instance, ESLint seems like a good candidate for a global installation. However, the ESLint team doesn't recommend it. If you do install ESLint globally, it may or may not work properly.

## Transpilation: Babel
Transpilation is the process of converting source code written in one language into another language with a similar level of abstraction to the original code. In the JavaScript world, it often means taking code written in a superset of JavaScript and rewriting it as plain JavaScript. Most often, that means converting code that uses the latest language features to an older version of the language.

Transpilers, such as Babel, let us use the newer features in our code without worrying about whether it works in the intended runtime environment. Since users often don't update their browsers, transpilers are most useful when working with browser-based applications.

To begin, we must install @babel/core and @babel/cli as local packages. Even though Babel is a command-line utility, the Babel docs recommend installing it locally. They've even made it hard to work with a global Babel installation:
```
npm install --save-dev @babel/core @babel/cli
```
We can now transpile the files in our lib folder:
```
npx babel lib --out-dir dist     # Note: that's the npx command, not npm!
```
This command tells Babel to transpile all JavaScript files in the lib directory and to output the resulting code to files with the same names in the dist directory. Babel creates a dist directory (if needed), transpiles our todo.js and todolist.js files, and creates two new files with the same name as the source files inside dist. It places the transpiled output in the files created in dist.

First, we need to install the Babel env preset to provide smart transpilation. A preset is a plug-in that has all the information needed to compile one version of JavaScript to another. The env transpiles code to ES5 and automatically detects what it needs to do to support different environments. We can install the env preset with the following command:
```
npm install --save-dev @babel/preset-env
```
Next, we'll add the --presets option to our babel command. This option tells Babel what presets it should use:
```
npx babel lib --out-dir dist --presets=@babel/preset-env
```

## Automating Tasks with npm Scripts
Scripts automate repetitive tasks such as building your project, minifying files, and deleting temporary files and folders. There are many ways to write scripts: through shell scripts (e.g., bash and zsh) and task runners like Gulp or Grunt. However, npm scripts provide a simple and versatile way to automate repetitive tasks.

### The Script Object in package.json
o use npm scripts, you first need to define them in the package.json file with the "scripts" object. The package.json file we built already contains a "scripts" object and a "test" key. The "scripts" object takes a series of key/value pairs in which each key is the name of the script, and the value is the script you want to run.

```
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1", // note the comma
    "foo": "echo 'How do you do?'"
  },
```
We can see that npm scripts are merely a way to run terminal commands. In effect, running npm run foo is the same as running echo 'How do you do?' directly from the terminal.

In the previous assignment, we used the babel CLI tool to transpile our JavaScript files in the lib folder and add the output files to the dist folder. If you're working on a real project, you need to do that each time you want to test your code. Typing that command with all those options will soon become tiresome. Can we automate that process? Yes, we can. All we have to do is add an npm script to our .package.json file:

```
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "foo": "echo 'How do you do?'", // note the comma
    "babel": "npx babel lib --out-dir dist --presets=@babel/preset-env"
  },
```

We can now transpile our code with the command npm run babel:
```
$ npm run babel

> todolist@1.0.0 babel /Users/.../todolist
> npx babel lib --out-dir dist --presets=@babel/preset-env

Successfully compiled 2 files with Babel.
```
One useful feature of npm scripts is that npm knows how to find command-line executables, even those that are part of a local package. It uses commands from local packages in preference to those stored in more traditional locations, such as the directories specified by the PATH environment variable. Thus, you don't need to use the npx command:
```
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "foo": "echo 'How do you do?'",
  "babel": "babel lib --out-dir dist --presets=@babel/preset-env"
}
```
One significant difference with omitting npx from a script's definition is that npx can search for and install packages for one-time execution. Without npx, you can only use pre-installed packages.

## Packaging the TodoList
Some things are required to publish a Node.js module:
1. Create a package.json file.
2. Provide values for the name, version, and main fields:
   * name is the name of your package.
   * version is the initial module version.
   * main is the name of the file that Node will load when someone imports your package.
3. Publish your node package.

We can keep the devDepedencies since npm won't install them when installing our package. We also don't need the dependencies in the "dependencies" key. We've only used them to learn about npm. After deleting the dependencies, run npm prune to remove them from node_modules as well.

Next, you should either change the value of the "main" field to one of the files in dist, or create an index.js file in the root directory of your project. Remember that main identifies the file that JavaScript will load when you import the package. We'll create an index.js file and require the files in dist that we need. We'll put the imported modules in an object assigned to module.exports:

```
module.exports = {
  TodoList: require('./dist/todolist'),
  Todo: require('./dist/todo'),
};
```

This file requires the Todo and TodoList classes and re-exports them in an enclosing object. Other applications that require our package will import this object.

At this point, our directory looks like this:
```
├── dist
│   ├── todo.js
│   └── todolist.js
├── lib
│   ├── todo.js
│   └── todolist.js
├── index.js
├── node_modules
├── package-lock.json
├── package.json
└── test
    └── todolist.test.js
```

The final step you need to take to publish your package is to execute the following command:

```
npm publish --access public
```

As you move on, remember the following details:
* npm provides a library of code that you can download and run, or use directly inside your JavaScript programs. You use the npm command to manage the packages you need.
* Babel is a JavaScript transpiler that compiles code written with newer syntax into older code. Transpilation is useful when we want to use the latest JavaScript features, but also want our code to run in environments that don't support those features. Typically, that means older browsers. Babel's command-line interface (CLI) works with the Babel core library and the required presets to transpile the latest JavaScript to the desired older version of JavaScript.
* The package.json file provides a way to list all of your project's dependencies and their versions in a single file. npm uses this file to resolve the interdependencies between all the packages and installs the appropriate versions.
* npm also provides the mechanisms you need to publish your own modules. Those modules can be packages of code that you require into your JavaScript programs or independent command-line programs. For instance, we require readline-sync in our programs to solicit input from the user, and use the jest command-line program from the jest package.

# Asynchronous Programming
Asynchronous functions, as opposed to synchronous functions, are functions that don't block execution for the rest of the program while they execute. Said differently, asynchronous functions run concurrently with other operations so that the caller doesn't have to wait for the task to finish running.

## Assignment: Asynchronous Execution with setTimeout
Much of the code you've seen and written so far runs sequentially within the JavaScript runtime. The browser evaluates each line in this program, one at a time. For each line of code, the next line of code must wait until the current line completes. We call this sequential code since each line runs in sequence. Another term for such code is synchronous code.

Part of what makes JavaScript so useful is that it has first-class functions; functions are a regular data type in the system. First-class functions mean we can write and use functions that accept or return other functions, such as the methods provided by array objects.

It's possible to write code that runs partly now, then pauses and continues to run later after a delay of milliseconds, minutes, hours, or even days. We call such code asynchronous code; it doesn't run continuously or even when the runtime encounters it. To illustrate how asynchronous code works, we need a way to make our code wait and run later.

setTimeout() is one of the simplest ways to run code asynchronously. It takes two arguments: a callback function and the time to delay execution of the callback, in milliseconds (1/1000th of a second or 1 ms). It sets a timer that waits until the specified delay elapses, then invokes the callback.

```js
setTimeout(function() {  // 1
  console.log('!');      // 5
}, 3000);

setTimeout(function() {  // 2
  console.log('World');  // 4
}, 1000);

console.log('Hello');    // 3
```

It's important to realize that there is a period between 3 and 4 and between 4 and 5 where nothing happens! None of this code runs during those gaps. Instead, the JavaScript runtime keeps track of the timers created by setTimeout. Once the delay time elapses, it then invokes the callback function.

```js
setTimeout(function() {
  console.log('!');
}, 0);

setTimeout(function() {
  console.log('World');
}, 0);

console.log('Hello');
```

```
Hello
!
World
```
You can't determine whether code is asynchronous merely by looking at it. If it calls any functions, then you must be familiar with the behavior of each of those functions to determine whether any are asynchronous.

Repeating execution with `setInterval`

```js
let id = setInterval(function() { console.log("hello"); }, 2000);
clearInterval(id);
```