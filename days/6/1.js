/**
 * https://adventofcode.com/2021/day/6
 */

const data = inputFile('input', ',').map(Number);
const DAYS = 80;

console.time();
for (let day = 0; day < DAYS; day++) {
  const snapshot = [...data];

  for (let i = 0; i < snapshot.length; i++) {
    if (data[i] === 0) {
      data[i] = 7; // Will -1 at end of loop
      data.push(8);
    }

    data[i]--;
  }
}

console.timeEnd();
console.log({ answer: data.length });
