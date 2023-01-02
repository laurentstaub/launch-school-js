/*
function myBind(func, context, ...args) {
  return function (...remainingArgs) {
    return func.apply(context, [...args, ...remainingArgs]);
  }
}

function addNumbers(a,b) {
  return a + b;
}

let addFive = myBind(addNumbers, null, 5);

console.log(addFive(10));
*/

/*  JS130 - JavaScript ExercisesClosures, Private Data, and IIFEsOur very own bind()

Our very own bind()

Function.prototype.bind is a method on all function objects that allows us to hard-bind a function to a particular object. The way this works is that you pass a context object to the bind method and it returns a new function that is essentially the same function but hard-bound to the context object supplied.

Create a function myBind, that accepts two arguments: 1) The function to bind, 2) The context object, and returns a new function that's hard-bound to the passed in context object. */

function myBind(func, context) {
  return function() {
    return func.apply(context, arguments);
  }
}

let originalObject = {
  text: "original text",
  
  logThis() {
    console.log(this.text);
  }
}

originalObject.logThis();

let myBindFunction = myBind(originalObject.logThis, { text: "this is the new context" });

myBindFunction();

let bindFunction = originalObject.logThis.bind({ text: "this is another context" });

bindFunction();

// LS Solution
// function myBind(func, ctx) {
//   return function() {
//     return func.apply(ctx, arguments);
//   }
// }

// function logThis() {
//   console.log(this);
// }

// myBind(logThis, "this is the context");

// logThis();
/* The bind() method creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.

bind(thisArg)
bind(thisArg, arg1)
bind(thisArg, arg1, arg2)
bind(thisArg, arg1, arg2, /* …, argN)

 thisArg
    The value to be passed as the this parameter to the target function func when the bound function is called. If the function is not in strict mode, null and undefined will be replaced with the global object, and primitive values will be converted to objects. The value is ignored if the bound function is constructed using the new operator.
*/