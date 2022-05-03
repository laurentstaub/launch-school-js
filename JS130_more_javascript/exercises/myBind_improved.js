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