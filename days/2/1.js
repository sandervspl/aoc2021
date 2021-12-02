/**
 * https://adventofcode.com/2021/day/2
 * What do you get if you multiply your final horizontal position by your final depth?
 */

const data = require('../../services/fileToString').fileToString('input').split('\n');
let h = d = 0;

for (const value of data) {
  const [type, v] = value.split(' ');
  if (type[0] === 'u') d -= +v;
  else if (type[0] === 'd') d += +v;
  else if (type[0] === 'f') h += +v;
}

console.log({answer: h * d});
