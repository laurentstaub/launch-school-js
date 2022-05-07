class Cat {
  constructor(name) {
    this.name = name;
  }

  miaow() {
    return `${this.name} is miaowing.`;
  }
}

module.exports = Cat;