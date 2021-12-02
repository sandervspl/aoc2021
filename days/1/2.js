/**
 * https://adventofcode.com/2021/day/1#part2
 * sums of a three-measurement sliding window
 * 
 * Your goal now is to count the number of times the sum of measurements in this sliding window 
 * increases from the previous sum. So, compare A with B, then compare B with C, then C with D,
 * and so on. Stop when there aren't enough measurements left to create a new three-measurement sum.
 */

const data = require('../../services/fileToString').fileToString('input').split('\n').map(Number);
let inc = 0;

for (let i = 0; i < data.length; i++) {
  const a = [];
  for (let j = i; j <= i+2; j++) {
    a.push(data[j]);
  }
  const asum = a.reduce((a, b) => a + b);

  const b = [];
  for (let j = i+1; j <= i+3; j++) {
    b.push(data[j]);
  }
  const bsum = b.reduce((a, b) => a + b);

  if (a.length !== 3 || b.length !== 3) {
    break;
  }

  if (bsum > asum) inc++;
}

console.log({answer: inc});
