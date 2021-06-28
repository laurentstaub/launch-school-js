let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = Object.create(myProtoObj);
myObj.qux = 3;

// Object has foo and bar from prototype and quw directly on the object

let objKeys = Object.keys(myObj);
objKeys.forEach(function(key) {
  console.log(key);
});

// Object.keys goes only through the object own keys
// => it will only console.log 3

for (let key in myObj) {
  console.log(key);
}

// let in goes through all the keys, even the ones from the prototype
// => it will console log 1, 2, 3
// to only log own keys with let in

for (let key in myObj) {
  if (myObj.hasOwnProperty(key)) {
    console.log(key);
  }
}