function objectsEqual(obj1, obj2) {
  let objKeys1 = Object.keys(obj1);
  let objKeys2 = Object.keys(obj2);

  if (objKeys1.length !== objKeys2.length) return false;

  for (let key in obj1) {
    if (!objKeys2.includes(key)) return false;
    if (obj1[key] !== obj2[key]) return false;
  }

  return true
}

console.log(objectsEqual({a: 'foo'}, {a: 'foo'}));                      // true
console.log(objectsEqual({a: 'foo'}, {a: 'fo'}));                      // false
console.log(objectsEqual({a: 'foo', b: 'bar'}, {a: 'foo'}));            // false
console.log(objectsEqual({}, {}));                                      // true
console.log(objectsEqual({a: 'foo', b: undefined}, {a: 'foo', c: 1}));  // false