// It won't log anything

let counter = 0;

while (counter > 0) {
  console.log('Woooot!');
  counter -= 1;
}

// It will log woot one time

let counter = 0;

do {
  console.log('Woooot!');
  counter -= 1;
} while (counter > 0);
