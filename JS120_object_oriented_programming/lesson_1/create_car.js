function createCar(maker, fuelLevelmax, engineOn) {
  return {
    make: maker,
    fuelLevel: fuelLevelmax,
    engineStatus: engineOn,

    drive() {
      console.log('vroom, vroom!')
    }
  }
}

let raceCar1 = createCar('BMW', 0.5, false);
raceCar1.drive();

let raceCar2 = createCar('Ferrari', 0.7, true);
raceCar2.drive();

console.log(raceCar1);