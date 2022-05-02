// property initializer
function xyz(foo, bar, qux) {
  return {
    foo,
    bar,
    qux,
  };
}


// concise methods
let obj = {
  foo() {},
  bar() {},
  baz: function() {},
};


// object destructuring
let obj2 = {
  foo: "foo",
  bar: "bar",
  qux: 42,
};

// let foo = obj2.foo;
// let bar = obj2.bar;
// let qux = obj2.qux;

let { foo, bar } = obj2;
let { qux } = obj2;


// object destructuring with parameters
function xyzzy({ foo, bar, qux }) {
  console.log(qux); // 3
  console.log(bar); // 2
  console.log(foo); // 1
}

let obj3 = {
  foo: 1,
  bar: 2,
  qux: 3,
};

xyzzy(obj3);

// ({ foo, bar, qux } = obj);


// array destructuring
let foo2 = [1, 2, 3];
let [ first, second, third ] = foo2;

// let first = foo[0];
// let second = foo[1];
// let third = foo[2];

let bar2 = [1, 2, 3, 4, 5, 6, 7];
let [ first2, , , fourth2, fifth2, , seventh2 ] = bar;

//
let one = 1;
let two = 2;
let three = 3;

let [ num3, num2, num1 ] =  [one, two, three];

console.log(num1);   // 3
console.log(num2);   // 2
console.log(num3);   // 1


// spread syntax
function add3(item1, item2, item3) {
  return item1 + item2 + item3;
}

let foo3 = [3, 7, 11];
add3(foo3[0], foo3[1], foo3[2]); // => 21

add3(...foo);

// Create a clone of an array
let foo4 = [1, 2, 3];
let bar4 = [...foo];
console.log(bar4);         // [1, 2, 3]
console.log(foo4 === bar4); // false -- bar is a new array

// rest syntax
let foo5 = [1, 2, 3, 4];
let [ bar5, ...otherStuff ] = foo5;
console.log(bar5);
console.log(otherStuff);

let foo6 = {bar6: 1, qux6: 2, baz6: 3, xyz6: 4};
let { bar6, baz6, ...otherStuff6 } = foo6;
console.log(bar6);
console.log(baz6);
console.log(otherStuff6);