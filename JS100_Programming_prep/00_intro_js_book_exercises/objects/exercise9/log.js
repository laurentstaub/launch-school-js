// we create an object
let foo = {
  a: 'hello',
  b: 'world',
};

// we store 'hello' in qux
let qux = 'hello';

function bar(argument1, argument2) {
  
  argument1.a = 'hi';
  argument2 = 'hi';
}

// we run bar
bar(foo, qux);

console.log(foo.a);
console.log(qux);