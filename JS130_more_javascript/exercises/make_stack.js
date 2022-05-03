function newStack() {
  let stack = [];
  // returns a stack object with three methods: push, pop, printStack
  return {
    push(item) {
      stack.push(item);
    },
    pop() {
      return stack.pop();
    },
    printStack() {
      stack.forEach(item => console.log(item));
    },
  }
}

let stack1 = newStack();

stack1.push("Hello");
stack1.push("Goodbye");
stack1.printStack();
console.log(stack1.pop());
stack1.printStack();