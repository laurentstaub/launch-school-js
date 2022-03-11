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
*/

// get set pattern

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