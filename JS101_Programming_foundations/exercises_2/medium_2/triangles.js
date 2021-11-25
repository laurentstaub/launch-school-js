function triangle(a1, a2, a3) {
  let [small, med, large] = [a1, a2, a3].sort((a, b) => a - b);

  if (small + med + large !== 180 || small <= 0) return 'invalid';
  if (large === 90) return 'right';
  if (large > 90) return 'obtuse';
  else return 'acute';
}

console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid" go