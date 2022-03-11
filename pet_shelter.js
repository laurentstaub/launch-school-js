class Pet {
  static pets = {};

  constructor(animal, name) {
    this.animal = animal;
    this.name = name;
    this.adopted = false;
    if (!Pet.pets[name]) {
      Pet.pets[name] = this;
    }
  }

  getsAdopted() {
    this.adopted = true;
  }
}

class Owner {
  constructor(name) {
    this.name = name;
    this.pets = [];
  }

  addPet(pet) {
    this.pets.push(pet);
    pet.getsAdopted();
  }

  numberOfPets() {
    return this.pets.length;
  }

  printPets() {
    this.pets.forEach(function(pet) {
      console.log(`a ${pet.animal} named ${pet.name}`)
    });
  }
}

class Shelter {
  constructor() {
    this.owners = {};
  }

  unadoptedAnimals() {
    return Object.keys(Pet.pets).filter(function(key) {
      return Pet.pets[key].adopted === false;
    })
    .length;
  }

  adopt(owner, pet) {
    owner.addPet(pet);
    if (!this.owners[owner.name]) {
      this.owners[owner.name] = owner;
    }
  }

  printAdoptions() {
    for(let name in this.owners) {
      console.log(`${name} has adopted the following pets:`);
      this.owners[name].printPets();
      console.log('');
    }
  }
}

let butterscotch = new Pet('cat', 'Butterscotch');
let pudding      = new Pet('cat', 'Pudding');
let darwin       = new Pet('bearded dragon', 'Darwin');
let kennedy      = new Pet('dog', 'Kennedy');
let sweetie      = new Pet('parakeet', 'Sweetie Pie');
let molly        = new Pet('dog', 'Molly');
let chester      = new Pet('fish', 'Chester');
let huahua       = new Pet('cat', 'Huahua');
let xiaobai      = new Pet('cat', 'Xiaobai');
let asta         = new Pet('dog', 'Asta');
let laddie       = new Pet('dog', 'Laddie');
let fluffy       = new Pet('cat', 'Fluffy');
let kat          = new Pet('cat', 'Kat');
let ben          = new Pet('cat', 'Ben');
let chatterbox   = new Pet('parakeet', 'Chatterbox');
let bluebell     = new Pet('parakeet', 'Bluebell');

let phanson = new Owner('P Hanson');
let bholmes = new Owner('B Holmes');
let lstaub  = new Owner('L Staub'); 

let shelter = new Shelter();

shelter.adopt(lstaub, huahua);
shelter.adopt(lstaub, xiaobai);
shelter.adopt(phanson, butterscotch);
shelter.adopt(phanson, pudding);
shelter.adopt(phanson, darwin);
shelter.adopt(bholmes, kennedy);
shelter.adopt(bholmes, sweetie);
shelter.adopt(bholmes, molly);
shelter.adopt(bholmes, chester);
shelter.printAdoptions();
console.log(`${lstaub.name} has ${lstaub.numberOfPets()} adopted pets.`);
console.log(`${phanson.name} has ${phanson.numberOfPets()} adopted pets.`);
console.log(`${bholmes.name} has ${bholmes.numberOfPets()} adopted pets.`);
console.log(`The Animal shelter has ${shelter.unadoptedAnimals()} unadopted pets.`);

/*
EXPECTED OUTPUT

P Hanson has adopted the following pets:
a cat named Butterscotch
a cat named Pudding
a bearded dragon named Darwin

B Holmes has adopted the following pets:
a dog named Molly
a parakeet named Sweetie Pie
a dog named Kennedy
a fish named Chester

P Hanson has 3 adopted pets.
B Holmes has 4 adopted pets.

The Animal shelter has 7 unadopted pets.
*/