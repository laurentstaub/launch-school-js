// It should create an array from the object below
// It should convert the keys to uppercase

let obj = {
  b: 2,
  a: 1,
  c: 3,
};

let objKeys = Object.keys(obj);
upperKeys = objKeys.map(key => key.toUpperCase());
console.log(upperKeys);
