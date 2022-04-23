/* Object.keys() vs for in
let human = {
  legs: 2,
  arms: 2,
}

let aHuman = Object.create(human)

aHuman.name = "Laurent";
aHuman.age = 42;

for (prop in aHuman) console.log(prop);
console.log(Object.keys(aHuman));

delete aHuman.age;
console.log(Object.keys(aHuman));

aHuman.display = function() {
  console.log(`${this.name}`);
}

aHuman.display();

const { describe } = require("eslint/lib/rule-tester/rule-tester");

get set pattern

let human = {
  name: "Laurent",
  age: 42,
  get getAge() {
    return this.age;
  },
  set setAge(newAge) {
    this.age = newAge;
  },
}

console.log(human.getAge);
human.setAge = 44;
console.log(human.getAge);

// OLOO pattern

let user = {
  init(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    return this;
  },

  describe() {
    console.log(`My name is ${this.firstName} ${this.lastName}`);
  },
};

let laurent = Object.create(user).init('Laurent', 'Staub', 44);
laurent.describe();


function repeatTwoTimes(func, context) {
  func.call(context); 
  func.call(context);
}

function aGuy() {
  let john = {
    firstName: 'John',
    greetings: function() {
      console.log('hello, ' + this.firstName);
    },
  };

  repeatTwoTimes(john.greetings, john); // Strips context
}

aGuy();


function createGreeter(language) {
  switch (language) {
    case 'en':
      return () => console.log('Hello!');
    case 'fr':
      return () => console.log('Bonjour!');
  }
}

let greeterFr = createGreeter('fr');
greeterFr(); // logs 'Bonjour!'

let greeterEn = createGreeter('en');
greeterEn(); // logs 'Hello!'
*/

function Rectangle(length, width) {
  this.length = length;
  this.width = width;
}

Rectangle.prototype.getArea = function() {
  return this.length * this.width;
};

Rectangle.prototype.toString = function() {
  
};