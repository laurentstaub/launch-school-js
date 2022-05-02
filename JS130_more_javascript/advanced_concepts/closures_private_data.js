"use strict";

/*
function makeCounterLogger(number1) {
  return function (number2) {
    if (number2 > number1) {
      for (let index = number1; index <= number2; index += 1) {
        console.log(index);
      }
    } else {
      for (let index = number1; index >= number2; index -= 1) {
        console.log(index);
      }
    }

  }
}

let countlog = makeCounterLogger(5);
countlog(8);
countlog(2);
*/

function makeList() {
  let theList = [];

  return {
    list() {
      if (theList.length === 0) {
        console.log("The list is empty");
      } else {
        for (let index = 0; index < theList.length; index += 1) {
          console.log(theList[index]);
        }
      }
    },

    add(item) {
      theList.push(item);
      console.log(`${item} added!`);
    },

    remove(item) {
      let index = theList.indexOf(item);
      theList.splice(index, 1);
      console.log(`${item} removed!`);
    },
  }
}

let list = makeList();
list.add("peas");
list.add("corn");
list.remove("peas");
list.list();
console.log(list.theList);