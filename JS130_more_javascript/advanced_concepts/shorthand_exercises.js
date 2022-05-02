/*
// 1
function foo(bar, qux, baz) {
  return {
    bar,
    baz,
    qux,
  };
}

function foo(bar, qux, baz) {
  return {
    bar: bar,
    baz: baz,
    qux: qux,
  };
}

// 2
function foo() {
  return {
    bar() {
      console.log("bar");
    },
    qux(arg1) {
      console.log("qux");
      console.log(arg1);
    },
    baz(arg1, arg2) {
      console.log("baz");
      console.log(arg1);
      console.log(arg2);
    },
  }
}

function foo() {
  return {
    bar: function() {
      console.log("bar");
    },
    qux: function(arg1) {
      console.log("qux");
      console.log(arg1);
    },
    baz: function(arg1, arg2) {
      console.log("baz");
      console.log(arg1);
      console.log(arg2);
    },
  }
}

//3
function foo(one, two, three) {
  return {
    bar: one,
    baz: two,
    qux: three,
  };
}

let foo = foo(1, 2, 3);
let baz = foo.baz;
let qux = foo.qux;
let bar = foo.bar;


let { baz, qux, bar } = foo(1, 2, 3);
console.log(baz);


function foo([ one, , three ]) {
  return [
    three,
    5,
    one,
  ];
}

let array = [1, 2, 3];
let result = foo(array);
let [ bar, qux, baz ] = result;

function foo(arr) {
  return [
    arr[2],
    5,
    arr[0],
  ];
}

let array = [1, 2, 3];
let result = foo(array);
let bar = result[0];
let qux = result[1];
let baz = result[2];


function product(num1, num2, num3) {
  return num1 * num2 * num3;
}

let array = [2, 3, 5];
let result = product(...array);

function product(num1, num2, num3) {
  return num1 * num2 * num3;
}

let array = [2, 3, 5];
let result = product(array[0], array[1], array[2]);


function product(...numbers) {
  return numbers.reduce((total, number) => total * number);
}

let result = product(2, 3, 4, 5);

function product() {
  let args = Array.from(arguments);
  return args.reduce((total, number) => total * number);
}

let result = product(2, 3, 4, 5);


function qux() {
  let animalType = "cat";
  let age = 9;
  let colors = ["black", "white"];

  return { type: animalType, age, colors };
}

let { type, age, colors } = qux();
console.log(type); // cat
console.log(age);  // 9
console.log(colors);  // [ 'black', 'white' ]
*/

function foo(first, two, three, four, last) {
  return {
    first,
    middle: [ two, three, four ],
    last,
  }
}

let array = [1, 2, 3, 4, 5];
let { first, last, middle } = foo(...array);
console.log(first);
console.log(middle);
console.log(last);