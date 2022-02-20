/*
function createPerson(firstName, lastName = '') {
  let person = {};

  person.firstName = firstName;
  person.lastName = lastName;

  person.fullName = function() {
    return `${this.firstName} ${this.lastName}`.trim();
  };

  return person;
}

let john = createPerson('John', 'Doe');
let jane = createPerson('Jane');

console.log(john.fullName());

function createPerson(firstName, lastName = '') {
  return {
    firstName: firstName,
    lastName,

    fullName: function() {
      return `${this.firstName} ${this.lastName}`.trim();
    }
  }
}

let john = createPerson('John', 'Doe');
let jane = createPerson('Jane');

console.log(john.fullName());


function makeObj() {
  return {
    propA = 10,
    propB = 20,
  };
}

function createInvoice(services = {}) {
  let phone = services.phone;
  if (phone === undefined) phone = 3000;

  let internet = services.internet;
  if (internet === undefined) internet = 5500;

  return {
    phone: phone,
    internet: internet,
    amountPaid: 0,
    total: function() {
      return this.phone + this.internet;
    },
    addPayment(payment) {
      this.amountPaid += payment.phone + payment.internet + payment.amount;
    },
    addPayments(payments) {
      payments.forEach(payment => {
        this.amountPaid += payment.phone + payment.internet + payment.amount;
      });
    },
    amountDue() {
      return this.total() - this.amountPaid;
    }
  }
}

function invoiceTotal(invoices) {
  let total = 0;

  for (let index = 0; index < invoices.length; index += 1) {
    total += invoices[index].total();
  }

  return total;
}

function createPayment(services = {}) {
  let phone = services.phone;
  if (phone === undefined) phone = 0;

  let internet = services.internet;
  if (internet === undefined) internet = 0;

  let amount = services.amount;
  if (amount === undefined) amount = 0;

  return {
    phone,
    internet,
    amount,
    total: function() {
      return this.phone + this.internet + this.amount;
    }
  }
}

function paymentTotal(payments) {
  return payments.reduce((sum, payment)  => sum + payment.total(), 0);
}

let invoice = createInvoice({
  phone: 1200,
  internet: 4000,
});

let payment1 = createPayment({ amount: 2000 });
let payment2 = createPayment({
  phone: 1000,
  internet: 1200
});

let payment3 = createPayment({ phone: 1000 });

invoice.addPayment(payment1);
invoice.addPayments([payment2, payment3]);
console.log(invoice.amountDue());       // this should return 0


function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.started = false;

  this.start = function() { this.started = true; };
  this.stop = function() { this.started = false; };
}

let corolla = new Car('Toyota', 'Corolla', 2016);
console.log(corolla);

let foo = {
  Car: function(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
}

let car1 = new foo.Car('Toyota', 'Camry', 2019);
console.log(car1.make);

function Cat(name, breed, weight) {
  this.name = name;
  this.breed = breed;
  this.weight = weight;

  return 'a cat';
}

let fluffy = new Cat('fluffy', 'Persian', 15);
console.log(fluffy);


let civicArgs = {
  make: 'Honda',
  model: 'Civic',
  year: 2016,
  color: 'black',
  passengers: 5,
  convertible: false,
  mileage: 16000
};

function Car(args) {
  Object.assign(this, args);

  this.drive = function() {
    this.started = true;
  };
}

let honda1 = new Car(civicArgs);
console.log(honda1);

if (honda1 instanceof Car) {
  console.log("It's a car!");
} else {
  console.log("It's not a car.");
}

function Lizard() {
  this.scamper = function() {
    console.log("I'm scampering!");
  };
}

let lizzy = new Lizard();
lizzy.scamper(); // ?


let DogPrototype = {
  bark() {
    console.log(this.weight > 20 ? 'Woof!' : 'Yip!');
  }
};

function Dog(name, breed, weight) {
  Object.setPrototypeOf(this, DogPrototype);
  this.name = name;
  this.breed = breed;
  this.weight = weight;
  // this.bark method removed.
}

let maxi = new Dog('Maxi', 'German Sheperd', 32);
let dexter = new Dog('Dexter', 'Rottweiler', 50);
let biggie = new Dog('Biggie', 'Whippet', 9);

maxi.bark();
console.log(maxi.hasOwnProperty('bark'));
console.log(Object.getPrototypeOf(maxi).bark);

function Dog(name, breed, weight) {
  this.name = name;
  this.breed = breed;
  this.weight = weight;
}

Dog.prototype.bark = function() {
  console.log(this.weight > 20 ? 'Woof!' : 'Yip!');
};

let maxi = new Dog('Maxi', 'German Sheperd', 32);
let dexter = new Dog('Dexter', 'Rottweiler', 50);
let biggie = new Dog('Biggie', 'Whippet', 9);

maxi.bark();
console.log(maxi.hasOwnProperty('bark'));
console.log(Object.getPrototypeOf(maxi).bark);

if (maxi.constructor === Dog) {
  console.log("It's a dog");
} else {
  console.log("It's not a dog")
}

Dog.prototype.constructor = function() {};
maxi.constructor === Dog;
maxi instanceof Dog;


let RECTANGLE = {
  area: function() {
    return this.width * this.height;
  },
  perimeter: function() {
    return 2 * (this.width + this.height);
  },
};

function Rectangle(width, height) {
  this.width = width;
  this.height = height;
  this.area = RECTANGLE.area.call(this);
  this.perimeter = RECTANGLE.perimeter.call(this);
}

let rect1 = new Rectangle(2, 3);

console.log(rect1.area);
console.log(rect1.perimeter);


function Circle(radius) {
  this.radius = radius;
  this.area = function() {
    return Math.PI * radius ** 2; 
  }
}

let a = new Circle(3);
let b = new Circle(4);

console.log(a.area().toFixed(2)); // => 28.27
console.log(b.area().toFixed(2)); // => 50.27
console.log(a.hasOwnProperty('area')); // => false


function Ninja() {
  this.swung = false;
}

Ninja.prototype.swing = function () {
  this.swung = true;
  return this;
}

let ninjaA = new Ninja();
let ninjaB = new Ninja();

console.log(ninjaA.swung);      // logs `true`
console.log(ninjaB.swing().swung);      // logs `true`


let ninjaA;

{
  const Ninja = function() {
    this.swung = false;
  };

  ninjaA = new Ninja();
}

// create a `ninjaB` object here; don't change anything else
let ninjaB = new ninjaA.constructor();

console.log(ninjaA.constructor === ninjaB.constructor); // => true


function User(first, last) {
  this.name = first + ' ' + last;

  return {
    name: first + ' ' + last,
  }
}

let name = 'Jane Doe';
let user1 = new User('John', 'Doe');
let user2 = User('John', 'Doe');

console.log(name);         // => Jane Doe
console.log(user1.name);   // => John Doe
console.log(user2.name);   // => John Doe


function Rectangle(length, width) {
  this.length = length;
  this.width = width;
}

Rectangle.prototype.getArea = function() {
  return this.length * this.width;
};

let rec = new Rectangle(10, 5);
console.log(typeof Rectangle);
console.log(rec instanceof Rectangle);
console.log(rec.constructor);
console.log(rec.getArea());


class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }

  getArea() {
    return this.length * this.width;
  }
}

let rec = new Rectangle(10, 5);
console.log(typeof Rectangle);
console.log(rec instanceof Rectangle);
console.log(rec.constructor);
console.log(rec.getArea());

function createObject(classDef) {
  return classDef();
}

class Foo {
  sayHi() {
    console.log('Hi');
  }
}

let obj = createObject(Foo);
obj.sayHi();


class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }

  static getDescription() {
    return 'A rectangle is a shape with 4 sides';
  }
}

console.log(Rectangle.getDescription());


const Animal = function(species) {
  this.species = species;
  return species;
};

Animal.prototype.sleep = function() {
  console.log(`The ${this.species} is sleeping`);
};

let lion = new Animal('Panthera leo');
lion.sleep(); // TypeError


function Dog() {
}

function Pet(type) {
  if (type === 'dog') {
    return new Dog();
  } else if (type === 'lion') {
    return 'not a pet!';
  }
}

let dog = new Pet('dog');
let lion = new Pet('lion');
let cat = new Pet('cat');
console.log(dog);
console.log(lion);
console.log(cat);


let arr1 = new Array(1, 2, 3);
let arr2 = Array(1, 2, 3);

console.log(arr1);
console.log(arr2);
console.log(arr1 === arr2); // => false

let str = "Naveed Fida"

function convertCase(char) {
  if (char === char.toLowerCase()) return char.toUpperCase();
  else return char.toLowerCase();
}

// str = [1, 2, 3].map.call(str, convertCase).join("");
// str = str.map(convertCase).join("");
// str = Array.from(str).map(convertCase).join("");
str = str.split("").map(convertCase);

console.log(str);


console.log(
  class Cat {
    constructor() {
      this.language = "miaouw";
    }
    
  }
);
*/


function createClass() {
  return (
    class Cat {
      constructor() {
        this.language = "miaouw";
      }
    }
  );
};

let roud = new Cat();
console.log(roud);