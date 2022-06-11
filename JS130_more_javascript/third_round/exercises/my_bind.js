function myBind(func, obj, ...args) {
  return function(...otherArgs) {
    return func.apply(obj, [...args, ...otherArgs]);
  }
}

function addNumbers(a, b) {
  return a + b;
}

let addFive = myBind(addNumbers, null, 5);

console.log(addFive(10)); // 15