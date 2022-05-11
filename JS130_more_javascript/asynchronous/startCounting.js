// Write a function named startCounting that logs a number to the console every second, starting with 1.
// Each output number should be one greater than the previous one.

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

let counterId = startCounting();
// some time later
stopCounting(counterId);