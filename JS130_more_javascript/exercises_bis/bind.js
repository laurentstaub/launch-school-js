
function myBind(func, context, ...firstArgs) {
  return function(...args) {
    return func.apply(context, firstArgs.concat(args));
  }
}

function addNumbers(a, b) {
  return a + b;
}

let addFive = myBind(addNumbers, null, 5);

console.log(addFive(10));