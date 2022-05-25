// Write a JavaScript function named delayLog that loops 
// through the numbers from 1 to 10, and logs each number
//after that number of seconds. It should log 1 after 1 second,
// 2 after 2 seconds, and so on.

/*
function delayLog() {
  for (let delay = 1; delay <= 10; delay += 1) {
    setTimeout(function() {
      console.log(delay);
    }, delay * 1000);
  }
}

delayLog();


setTimeout(function() {   // 1
  console.log('Once');    // 5
}, 1000);

setTimeout(function() {   // 2
  console.log('upon');    // 7
}, 3000);

setTimeout(function() {   // 3
  console.log('a');       // 6
}, 2000);

setTimeout(function() {   // 4
  console.log('time');    // 8
}, 4000);


setTimeout(function() {
  setTimeout(function() {
    q();
  }, 15);  // 

  d();  // 3

  setTimeout(function() {
    n(); // 5
  }, 5);

  z();  // 4
}, 10);

setTimeout(function() {
  s();  // 6
}, 20);

setTimeout(function() {
  f();  // 2
});

g();  // 1


function afterNSeconds(callback, time) {
  setTimeout(callback, time * 1000);
}
*/

function startCounting() {
  let index = 1;
  let counterId = setInterval(function() {
    console.log(index);
    index += 1;
  }, 1000);

  return counterId;
}

function stopCounting(counterId) {
  clearInterval(counterId);
}

let counter = startCounting();