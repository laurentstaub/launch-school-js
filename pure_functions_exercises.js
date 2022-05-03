// 1/ What side effects
const bar = 42;
let qux = [1, 2, 3];
let baz = 3;

function foo(arr) {
  let value = arr.pop(); // side effect: mutating the array
  console.log(`popped ${value} from the array`) // side effect: logging on the console
  return value + bar + baz;
}

foo(qux);

