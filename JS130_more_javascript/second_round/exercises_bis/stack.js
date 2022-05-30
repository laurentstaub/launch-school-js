function newStack() {
  let array = [];
  return {
    push(element) {
      array.push(element);
    },

    pop() {
      array.pop();
    },

    printStack() {
      array.forEach(element => console.log(element));
    },
  };
}

let aStack = newStack();

aStack.push('hi');
aStack.push('Lao');
aStack.printStack();
aStack.pop();
aStack.printStack();