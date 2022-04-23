//Using the following code, create a towMixin mixin that contains a method named 
// tow that returns I can tow a trailer! when invoked. Include the mixin in the 
// Truck class.

class Truck {}

class Car {}

let towMixin = {
  tow: function() {
    console.log('I can tow a trailer!');
  },
}

Object.assign(Truck.prototype, towMixin);

let truck = new Truck();
truck.tow();

// I can tow a trailer!