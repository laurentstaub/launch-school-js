// 1/ What side effects
const bar = 42;
let qux = [1, 2, 3];
let baz = 3;

function foo(arr) {
  let value = arr.pop();
  console.log(`popped ${value} from the array`)
  return value + bar + baz;
}

foo(qux);