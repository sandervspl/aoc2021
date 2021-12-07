/**
 * https://adventofcode.com/2021/day/7#part2
 */

const data = inputFile('input', ',').map(Number);

console.time();
let sol = Array.from({ length: Math.max(...data) }, () => 0);

for (let i = Math.min(...data); i < Math.max(...data); i++) {
  for (let entry of data) {
    let step = 1;
    for (let j = Math.min(entry, i); j < Math.max(entry, i); j++) {
      sol[i] += step++;
    }
  }
}

const answer = Math.min(...sol);
console.log({ answer });
console.timeEnd();
