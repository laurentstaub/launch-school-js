function newStack() {
  let stack = [];

  return {
    push(element) {
      stack.push(element);
    },

    pop() {
      stack.pop();
    },

    printStack() {
      stack.forEach(element => console.log(element));
    },
  }
}

let stackos = newStack();

stackos.push("Hi");
stackos.printStack();
stackos.push("Hi2");
stackos.printStack();
stackos.pop();
stackos.printStack();