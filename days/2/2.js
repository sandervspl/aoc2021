/**
 * https://adventofcode.com/2021/day/2#part2
 * What do you get if you multiply your final horizontal position by your final depth?
 */

const data = require('../../services/fileToString').fileToString('input').split('\n');
let h = d = a = 0;

for (const value of data) {
  const [type, v] = value.split(' ');
  if (type[0] === 'u') a -= +v;
  else if (type[0] === 'd') a += +v;
  else if (type[0] === 'f') {
    h += +v;
    d += (a * +v);
  }
}

console.log({answer: h * d});
