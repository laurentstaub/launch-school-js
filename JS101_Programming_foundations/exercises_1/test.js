let n = 1;
console.log(n == '1');
n === '1';
n = '1';



// Closure and Scope
let home = "Denver";

function travel() {
  function goHome() {
    console.log(`I made it home, to ${home}!`);
  }

  let home = "my hotel";
  
  goHome();
}

travel();


// Closure and Scope
let home = "Denver";

function goHome() {
  console.log(`I made it home, to ${home}!`);
}

function travel() {
  let home = "my hotel";
  goHome();
}

home = "Kalamazoo";

travel();

// Closure and Scope
function goHome() {
  console.log(`I made it home, to ${home}!`);
}

function travel() {
  let home = "my hotel";
  goHome();
}

let home;

travel();

home = "Kalamazoo";

// Hoisting
function bar() {
  var foo = 2;
  var qux = 5;
  return qux;
}

function foo() {}

foo = 1;
bar();

console.log(foo, bar);

//

function bar() {
  let foo = 2;
  console.log(foo);
}

let foo = 1;
bar();

//
function bar() {
  foo = 2;
  console.log(foo);
  console.log(window.foo);
}

bar();

let foo = 1;

console.log(foo);
console.log(window.foo);

/*
It will return [undefined, 'bear']

We call map on the array, it will go through tall elements and call the callback on each element and return it in a new array. 

We access the length property of the first element, which is 3. The condition in the if statement will return false, therefore, the callback will return undefined as the if block will not be executed.

We then acess the length property of the second element, which is 4. The condition in the if statement will return tru this time and run the block below, the return elem statement. This will return the element unchanged, in this case, 'bear'.

map will then return the array [undefined, 'bear']
*/

/*
/*
The callback will return 2, 4 and 6. The every method will return true.

num = num * 2 is an assignment and an expression ; the result of the expression num * 2 will be assigned to num and returned by the callback each time. It will return 2, 4 and 6 which all be evaluated as true. Then, as all these calls return true, every will also return true.

We call every() on the array [1, 2, 3]. It will return a boolean only if the elements of the array pass the test provided by the callback function.
*/


// Write a function that takes a string argument consisting of a first name, a space, and a last name, and returns a new string consisting of the last name, a comma, a space, and the first name.

// Examples:
swapName('Joe Roberts');    // "Roberts, Joe"

function swapName(string) {
  return string
    .split(' ')
    .reverse()
    .join(', ');
}



sum(23);           // 5
sum(496);          // 19
sum(123456789);    // 45

function sum(number) {
  return String(number)
    .split('')
    .reduce((acc, current) => acc + current, 0);
}

//Laurent
function sum(number) {
  return number
    .toString()
    .split('')
    .reduce((acc, current) => acc + parseInt(current), 0);
}