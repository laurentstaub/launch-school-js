/*
function Person() {
}

Person.prototype.greeting = function(text) {
  console.log(text);
}

function Shouter() {
  Person.call(this);
}

Shouter.prototype = Object.create(Person.prototype);

Shouter.prototype.greeting = function(text) {
  Person.prototype.greeting.call(this, text.toUpperCase());
}

The Person class is a super-type of the Shouter class. The Person
class defines a method greeting, which logs the value stored in text
to the console. Within the implementation of greeting on the Shouter
class, we want to invoke the greeting method defined on Person and
pass in an uppercase text argument.

*/

class Person {
  greeting(text) {
    console.log(text);
  }
}

class Shouter extends Person {
  greeting(text) {
    super.greeting(text.toUpperCase());
  }
}

let person = new Person();
let shouter = new Shouter();

person.greeting("Hello. It's very nice to meet you."); // Hello. It's very nice to meet you
shouter.greeting("Hello my friend."); // HELLO MY FRIEND.