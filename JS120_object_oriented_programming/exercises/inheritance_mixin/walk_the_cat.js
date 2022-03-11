class Cat {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return `Hello! My name is ${this.name}!`;
  }
}

let kitty = new Cat("Sophie");
console.log(kitty.greet());
console.log(kitty.walk());

// Hello! My name is Sophie!
// Let's go for a walk!