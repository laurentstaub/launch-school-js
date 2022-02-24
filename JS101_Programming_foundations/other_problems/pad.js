// OLOO
/*
let myChair = {
  init(width, height) {
    this.width = width;
    this.height = height;
    return this;
  }
};
let anotherChair = Object.create(myChair).init(40,60);
console.log(anotherChair);

// factory function

function createUser(firstName, lastName, age) {
  return {
    account: undefined,
    firstName,
    lastName,
    age,

    createAccount() {
      this.account = true;
    }
  }
}

let user1 = createUser("Lao", "Staub", 42);
console.log(user1.account);
user1.createAccount();
console.log(user1.account);


let fooA = { bar: 1 };
let fooB = Object.create(fooA);
let fooC = Object.create(fooB);

assignProperty(fooC, "bar", 2);
console.log(fooA.bar); // 2
console.log(fooC.bar); // 2

assignProperty(fooC, "qux", 3);
console.log(fooA.qux); // undefined
console.log(fooC.qux); // undefined
console.log(fooA.hasOwnProperty("qux")); // false
console.log(fooC.hasOwnProperty("qux")); // false

function assignProperty(object, prop, value) {
  while (object !== null) {

    if (object.hasOwnProperty(prop)) {
      object[prop] = value;
    }

    object = Object.getPrototypeOf(object);
  }

}
*/

bar();
function bar() {
  console.log("this is bar");
}

foo();
const foo = function() {
  console.log("this is foo");
};