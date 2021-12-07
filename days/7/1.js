/**
 * https://adventofcode.com/2021/day/7
 */

const data = inputFile('input', ',').map(Number);

console.time();
let sol = Array.from({ length: Math.max(...data) }, () => 0);

for (let i = Math.min(...data); i < Math.max(...data); i++) {
  for (let entry of data) {
    sol[i] += Math.max(entry, i) - Math.min(entry, i);
  }
}

const answer = Math.min(...sol);
console.log({ answer });
console.timeEnd();
