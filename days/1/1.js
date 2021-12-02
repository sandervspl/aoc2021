/**
 * https://adventofcode.com/2021/day/1
 * count the number of times a depth measurement increases from the previous measurement
 */

const { fileToString } = require('../../services/fileToString');

let inc = 0;

fileToString("input")
  .split('\n')
  .map(Number)
  .reduce((prev, cur) => {
    if (prev < cur) inc++;
    return cur;
  });

console.log({answer: inc});
