// RETRIEVE A VALUE

//Write the code necessary to retrieve the value of the courses property of our student object.

let student = {
  name: 'Carmen',
  age: 14,
  grade: 10,
  courses: ['biology', 'algebra', 'composition', 'ceramics'],
  gpa: 3.75,
};

student.courses;  // use when possible
student['courses'];


// RETRIEVE A VALUE (PART 2)

// Given the below object jane, write code that retrieves the country in which Jane is located.

let jane = {
  firstName: 'Jane',
  lastName: 'Harrelson',
  age: 32,
  location: {
    country: 'Denmark',
    city: 'Aarhus'
  },
  occupation: 'engineer',
};

jane.location.country;
jane['location']['country'];


// ADD A PROPERTY

let fido = {
  name: 'Fido',
  species: 'Labrador Retriever',
  color: 'brown',
  weight: 16,
};

// Add property 'age'.
fido.age = 3;
// Add property 'favorite food'.
fido['favorite food'] = 'chicken';


// GREETINGS FROM JANE;

let jane = {
  firstName: 'Jane',
  lastName: 'Harrelson',
  age: 32,
  location: {
    country: 'Denmark',
    city: 'Aarhus'
  },
  occupation: 'engineer',
  // add code here
  greet: function(name) {
    console.log(`Hej, ${name}!`);
  }
};

jane.greet('Bobby'); // Hej, Bobby!


// DOT NOTATION VS BRACKET NOTATION

let ocean = {};
let prefix = 'Indian';

ocean.prefix = 'Pacific';

console.log(ocean); // ?
{ prefix: 'Pacific' }

let ocean = {};
let prefix = 'Indian';

ocean[prefix] = 'Pacific';

console.log(ocean); // ?
{ Indian: 'Pacific' }


// IS IT TRUE?

let obj = {
  num: 42,
  'property name': 'string value',
  true: false,
  fun: function() {
    console.log('Harr Harr!');
  },
};

for (let prop in obj) {
  if (prop === true) {
    console.log("It's true!");
  }
}

// It never logs "It's true!" because prop is looking for the boolean
// But props are strings


// CAR KEYS

let vehicle = {
  manufacturer: 'Tesla',
  model: 'Model X',
  year: 2015,
  range: 295,
  seats: 7
};

let keys = Object.keys(vehicle);
console.log(keys);

let keys = [];
for (let property in vehicle) {
  keys.push(property);
}


// CONVERT AN OBJECT TO A NESTED ARRAY

let person = {
  title: 'Duke',
  name: 'Nukem',
  age: 33
};

// Expected output:
// [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]]

Object.entries(person);

let nestedPerson = [];

for (let property in person) {
  nestedPerson.push([property, person[property]]);
}

console.log(nestedPerson);


// AND VICE VERSA

let nestedArray = [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]];

// Expected output:
// { title: 'Duke', name: 'Nukem', age: 33 }

Object.assign({}, nestedArray);

let person = {};
for (let i = 0; i < nestedArray.length; i += 1) {
  person[nestedArray[i][0]] = nestedArray[i][1];
}


// CLONING A PERSON

function clone(obj) {
  Object.assign({}, obj);
}

let person = {
  title: 'Duke',
  name: {
    value: 'Nukem',
    isStageName: true
  },
  age: 33
};

let clonedPerson = clone(person);
person.age = 34;

console.log(person.age);       // 34
console.log(clonedPerson.age); // 33

person.name.isStageName = false;
console.log(person.name.isStageName);       // false
console.log(clonedPerson.name.isStageName); // false