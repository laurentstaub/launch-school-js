let pete = {
  name: 'Pete',
  pets: [],
};

let dog = {
  name: 'Maxi',
  makeNoise() {
    console.log('Woof! Woof');
  },
  eat() {
    // implementation
  }
}

let cat = {
  name: 'Fluffy',
  makeNoise() {
    console.log('Meow! Meow!');
  },
  eat() {
    // implementation
  }
}

pete.pets.push(cat);
pete.pets.push(dog);

console.log(pete);