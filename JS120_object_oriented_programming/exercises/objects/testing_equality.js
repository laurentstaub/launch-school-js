function objectsEqual(obj1, obj2) {
  let obj1Keys = String(Object.keys(obj1).sort());
  let obj2Keys = String(Object.keys(obj2).sort());

  if (obj1Keys !== obj2Keys) return false;

  for (let key in obj1) {
    if (obj1[key] === obj2[key]) continue;
    else return false;
  }

  return true;
}

console.log(objectsEqual({a: 'foo'}, {a: 'foo'}));                      // true
console.log(objectsEqual({a: 'foo', b: 'bar'}, {a: 'foo'}));            // false
console.log(objectsEqual({}, {}));                                      // true
console.log(objectsEqual({a: 'foo', b: undefined}, {a: 'foo', c: 1}));  // false