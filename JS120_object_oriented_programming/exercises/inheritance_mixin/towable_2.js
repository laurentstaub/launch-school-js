const towMixin = {
  tow() {
    return "I can tow a trailer!";
  }
}

class Truck {
  constructor(year) {
    this.year = year;
    Object.assign(this, towMixin);
  }
}

class Car {
  constructor(year) {
    this.year = year;
  }
}

let truck = new Truck(2002);
console.log(truck.year);
console.log(truck.tow());

let car = new Car(2015);
console.log(car.year);

// 2002
// I can tow a trailer!
// 2015