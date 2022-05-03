/*
FUNCTION
delegate function that can be used to delegate the behavior of a method or function 
to another object's method.

RETURN VALUE

ARGUMENTS
delegate takes a minimum of two arguments: 
(1) the object and (2) name of the method on the object. 
The remaining arguments, if any, are passed — as arguments — to the objects' method that it delegates to.
*/

let foo = {
  name: 'test',
  bar: function(greeting) {
    console.log(greeting + ' ' + this.name);
  },
};

let baz = {
  qux: delegate(foo, 'bar', 'hello'),
};

baz.qux();   // logs 'hello test';
foo.bar = function() { console.log('changed'); };
baz.qux();          // logs 'changed'

function delegate(obj, methodName, ...args) {
  return function() {
    obj[methodName].call(obj, ...args);
  }
}