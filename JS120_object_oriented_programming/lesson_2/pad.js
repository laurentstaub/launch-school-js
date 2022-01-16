/*
function createCar(make, model, year) {
  return {
    make,  // Same as "make: make"
    model, // Same as "model: model"
    year,  // Same as "year: year"
    started: false,

    start () {  // Same as "start: function () {"
      this.started = true;
    },

    stop () {   // Same as "stop: function () {"
      this.started = false;
    },
  };
}

let car1 = createCar('Toyota', 'Corolla', 2016);
let car2 = createCar('Honda', 'Civic', 2017);

// console.log(car1);

let a = {
  foo: 1,
  bar: 2,
};

let b = Object.create(a);
console.log(b.foo);
console.log(b);

console.log(a.hasOwnProperty('foo')); // => true
console.log(b.hasOwnProperty('foo')); // => false

console.log(Object.getPrototypeOf(b));

let a = {
  foo: 1,
  bar: 2,
};

let b = {};
Object.setPrototypeOf(b, a);

console.log(b.foo);
console.log(b);
console.log(Object.getPrototypeOf(b));


let a = {}

console.log(Object.getPrototypeOf(a));

let a = { foo: 1, };
let b = { bar: 2, };
let c = { baz: 3, };

Object.setPrototypeOf(c, b);
Object.setPrototypeOf(b, a);

console.log(c.bar);
console.log(c.foo);
*/

function assignProperty(obj, prop, val) {
  while (obj !== null) {
    if (obj[prop]) obj[prop] = val;
    obj = Object.getPrototypeOf(obj);
  }
}

let fooA = { bar: 1 };
let fooB = Object.create(fooA);
let fooC = Object.create(fooB);

assignProperty(fooC, "bar", 2);
console.log(fooA.bar); // 2
console.log(fooC.bar); // 2

assignProperty(fooC, "qux", 3);
console.log(fooA.qux); // undefined
console.log(fooC.qux); // undefined
console.log(fooA.hasOwnProperty("qux")); // false
console.log(fooC.hasOwnProperty("qux")); // false