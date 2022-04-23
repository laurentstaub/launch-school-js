let flyingFast = {
  speed() {
    console.log("It flies fast");
  },
};

function Bird(name) {
  this.name = name;
  this.legs = 2;
}

Object.assign(Bird.prototype, flyingFast);
let hawkie = new Bird("Hawkie");
