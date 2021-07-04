// It should be a function
// It should create and return the copy of an object
// It should take 2 arguments: 
//  * An object to copy
//  * An array of the keys that you want to copy
// If the array of the keys is omittes, it should copy all the existing keys

let objToCopy = {
  foo: 1,
  bar: 2,
  qux: 3,
};

let newObj = copyObj(objToCopy);
console.log(newObj);        // => { foo: 1, bar: 2, qux: 3 }

let newObj2 = copyObj(objToCopy, [ 'foo', 'qux' ]);
console.log(newObj2);       // => { foo: 1, qux: 3 }

let newObj3 = copyObj(objToCopy, [ 'bar' ]);
console.log(newObj3);       // => { bar: 2 }


function copyObject(objToCopy, keysToCopy) {
  let objToReturn = {};

  if (!keysToCopy) {
    keysToCopy = Object.keys(objToCopy);
  }
  
  keysToCopy.forEach(function (key){
    objToReturn[key] = objToCopy[key];
  });

  return objToReturn;

}