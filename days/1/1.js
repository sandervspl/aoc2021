/**
 * https://adventofcode.com/2021/day/1
 * count the number of times a depth measurement increases from the previous measurement
 */

let inc = 0;

inputFile()
  .map(Number)
  .reduce((prev, cur) => {
    if (prev < cur) inc++;
    return cur;
  });

console.log({answer: inc});
