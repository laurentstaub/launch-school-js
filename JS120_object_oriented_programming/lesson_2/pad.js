/*
function createCar(make, model, year) {
  return {
    make,  // Same as "make: make"
    model, // Same as "model: model"
    year,  // Same as "year: year"
    started: false,

    start () {  // Same as "start: function () {"
      this.started = true;
    },

    stop () {   // Same as "stop: function () {"
      this.started = false;
    },
  };
}

let car1 = createCar('Toyota', 'Corolla', 2016);
let car2 = createCar('Honda', 'Civic', 2017);

// console.log(car1);

let a = {
  foo: 1,
  bar: 2,
};

let b = Object.create(a);
console.log(b.foo);
console.log(b);

console.log(a.hasOwnProperty('foo')); // => true
console.log(b.hasOwnProperty('foo')); // => false

console.log(Object.getPrototypeOf(b));

let a = {
  foo: 1,
  bar: 2,
};

let b = {};
Object.setPrototypeOf(b, a);

console.log(b.foo);
console.log(b);
console.log(Object.getPrototypeOf(b));


let a = {}

console.log(Object.getPrototypeOf(a));

let a = { foo: 1, };
let b = { bar: 2, };
let c = { baz: 3, };

Object.setPrototypeOf(c, b);
Object.setPrototypeOf(b, a);

console.log(c.bar);
console.log(c.foo);

function assignProperty(obj, prop, val) {
  while (obj !== null) {
    if (obj[prop]) obj[prop] = val;
    obj = Object.getPrototypeOf(obj);
  }
}

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

function mapNumsToSquares(nums) {
  let squaredArray = [];

  for (let index = 0; index < nums.length; index += 1) {
    let current = nums[index];
    squaredArray.push(current * current);
  }

  return squaredArray;
}

console.log(mapNumsToSquares([3, 2, 1]));

Higher order functions
function createGreeter(language) {
  switch (language) {
    case 'en':
      return () => console.log('Hello!');
    case 'es':
      return () => console.log('Hola!');
    case 'fr':
      return () => console.log('Bonjour!');
  }
}

let greeterEs = createGreeter('es');
greeterEs();

let greeterEn = createGreeter('en');
greeterEn();


Explicit execution context
function logNum() {
  console.log(this.num);
}

let obj = { num: 42 };

logNum.call(obj);


function logNum() {
  console.log(this.num);
}

let obj = { num: 42 };

obj.logNum  = logNum;
obj.logNum();

let obj1 = {
  logNum() {
    console.log(this.num);
  }
};

let obj2 = {
  num: 42,
};

obj1.logNum.call(obj2);


let obj1 = {
  logNum() {
    console.log(this.num);
  }
};

let obj2 = {
  num: 42,
};

obj2.logNum = obj1.logNum;
obj2.logNum();


function sumNum1(num1) {
  return this.num + num1;
}

let obj = { num: 42, };

console.log(sumNum1.call(obj, 5));


INTERESTING EXAMPLE

let iPad = {
  name: 'iPad',
  price: 40000,
};

let kindle = {
  name: 'Kindle',
  price: 30000,
};

function printLine(lineNumber, punctuation) {
  console.log(`${lineNumber}: ${this.name}, ${this.price/100} dollars${punctuation}`);
}

printLine.call(iPad, 1, ';');
printLine.call(kindle, 2, '.');

let foo = {
  a:1,
  b:2,
};

let bar = {
  a: 'abc',
  b: 'def',
  add: function() {
    return this.a + this.b;
  },
};

console.log(bar.add.call(foo));


BIND
function sumNum(num1) {
  return this.num + num1;
}

let obj = { num: 42 };
let sumNum2 = sumNum.bind(obj);
console.log(sumNum2(5));

let object = {
  a: 'hello',
  b: 'world',
  foo: function() {
    return this.a + ' ' + this.b;
  },
};

let object2 = {
  a: 'hi',
  b: 'there',
};

let bar = object.foo;
console.log(bar());

let baz = object.foo.bind(object);
baz.call(object2);  // "hello world" - `this` still refers to `object`
console.log(baz());

let greetings = {
  morning: 'Good morning, ', 
  afternoon: 'Good afternoon, ',
  evening: 'Good evening, ',

  greeting: function(name) {
    let currentHour = (new Date()).getHours();

    if (currentHour < 12) {
      console.log(this.morning + name);
    } else if (currentHour < 18) {
      console.log(this.afternoon + name);
    } else {
      console.log(this.evening + name);
    }
  }
};

let spanishWords = {
  morning: 'Buenos dias, ',
  afternoon: 'Buenas tardes, ',
  evening: 'Buena noches, ',
};

let spanishGreeter = greetings.greeting.bind(spanishWords);

spanishGreeter('Jose');
spanishGreeter('Juan');

let obj = {
  a: 'hello',
  b: 'world',
  foo: function() {
    function bar() {
      console.log(this.a + ' ' + this.b);
    }

    bar();
  },
};

obj.foo();

let obj = {
  a: 'hello',
  b: 'world',
  foo: function() {
    let self = this;

    function bar() {
      console.log(self.a + ' ' + self.b);
    }

    bar();
  },
};

obj.foo();

let obj = {
  a: 'hello',
  b: 'world',
  foo: function() {
    let bar = function() {
      console.log(this.a + ' ' + this.b);
    }.bind(this);
    bar();
    bar();
  }
};

obj.foo();

let obj = {
  a: 'hello',
  b: 'world',
  foo: function() {
    let bar = () => {
      console.log(this.a + ' ' + this.b);
    }
    bar();
    bar();
  }
};

obj.foo();

let obj = {
  a: 'hello',
  b: 'world',
  foo: function() {
    let self = this;
    [1, 2, 3].forEach(function(number) {
      console.log(String(number) + ' ' + self.a + ' ' + self.b);
    });
  },
};

obj.foo();

let obj = {
  a: 'hello',
  b: 'world',
  foo: function() {
    [1, 2, 3].forEach(function(number) {
      console.log(String(number) + ' ' + this.a + ' ' + this.b);
    }.bind(this));
  },
};

obj.foo();

let obj = {
  a: 'hello',
  b: 'world',
  foo: function() {
    [1, 2, 3].forEach(number => {
      console.log(String(number) + ' ' + this.a + ' ' + this.b);
    });
  },
};

obj.foo();

let obj = {
  a: 'hello',
  b: 'world',
  foo: function() {
    [1, 2, 3].forEach(function(number) {
      console.log(String(number) + ' ' + this.a + ' ' + this.b);
    }, this);
  },
};

obj.foo();

let turk = {
  firstName: 'Christopher',
  lastName: 'Turk',
  occupation: 'Surgeon',
  getDescription: function() {
      return this.firstName + ' ' + this.lastName + ' is a '
                                  + this.occupation + '.';
  },
};

function logReturnVal(func) {
  let returnVal = func.call(turk);
  console.log(returnVal);
}

logReturnVal(turk.getDescription);

const TESgames = {
  titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
  seriesTitle: 'The Elder Scrolls',
  listGames: function() {
    self = this;
    this.titles.forEach(function(title) {
      console.log(self.seriesTitle + ': ' + title);
    });
  }
};

TESgames.listGames();

const TESgames = {
  titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
  seriesTitle: 'The Elder Scrolls',
  listGames: function() {
    this.titles.forEach(function(title) {
      console.log(this.seriesTitle + ': ' + title);
    }, this);
  }
};

TESgames.listGames();

const TESgames = {
  titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
  seriesTitle: 'The Elder Scrolls',
  listGames: function() {
    this.titles.forEach(title => {
      console.log(this.seriesTitle + ': ' + title);
    });
  }
};

TESgames.listGames();

let foo = {
  a: 0,
  incrementA: function() {
    let self = this;
    function increment() {
      self.a += 1;
    }

    increment();
  }
};

foo.incrementA();
foo.incrementA();
foo.incrementA();

console.log(foo.a);

(function sum(number1, number2) {
  return number1 + number2;
});

console.log(sum(3, 4));


function bar() {
  console.log('good morning');
}

global.inner = {
  bar() {
    console.log('good afternoon');
  },
};

let obj = {
  inner: {
    bar() {
      console.log('good night');
    },

    foo() {
      bar();
    },
  },

  bar() {
    console.log('wake up');
  },

  foo() {
    this.inner.bar();
    inner.bar();
    bar();
  }
};

let foo = function() {
  console.log('go to sleep');
}

function go(foo) {
  foo();
}

go(obj.foo);


let cat = {
  name: 'Pudding',
  colors: 'black and white',
  identify() {
    let that = this;
    let report = function() {
      console.log(`${that.name} is a ${that.colors} cat.`);
    };
    report();
  },
};

cat.identify();


let logResult = function(func) {
  let result = func();
  console.log(result);
  return result;
};

let foo = function() {
  let sue = {
    name: 'Sue Perkins',
    age: 37,
    myAge() {
      return `${this.name} is ${this.age} years old`;
    },
  };
  logResult(sue.myAge.call(sue));
};

foo();
// Expected output: Sue Perkins is 37 years old.
*/

let cats = {
  names: [ 'Butterscotch', 'Pudding', 'Fluffy' ],
  foo() {
    [1, 2, 3].forEach(function(number) {
      console.log(`${number}: ${this.names[number - 1]}`);
    }, this);
  },
};

cats.foo();
// Expected output:
// 1: Butterscotch
// 2: Pudding
// 3: Fluffy