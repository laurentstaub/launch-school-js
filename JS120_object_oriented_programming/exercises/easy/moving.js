class Person {
  constructor(name) {
    this.name = name;
  }

  gait() {
    return "strolls";
  }
}

class Cat {
  constructor(name) {
    this.name = name;
  }

  gait() {
    return "saunters";
  }
}

class Cheetah {
  constructor(name) {
    this.name = name;
  }

  gait() {
    return "runs";
  }
}

let walkMixin = {
  walk: function() {
    console.log(`${this.name} ${this.gait()} forward`);
  }
}

let mike = new Person("Mike");
Object.assign(Person.prototype, walkMixin);
console.log(mike.walk()); // "Mike strolls forward"

let kitty = new Cat("Kitty");
Object.assign(Cat.prototype, walkMixin);
console.log(kitty.walk()); // "Kitty saunters forward"

let flash = new Cheetah("Flash");
Object.assign(Cheetah.prototype, walkMixin);
console.log(flash.walk()); // "Flash runs forward"