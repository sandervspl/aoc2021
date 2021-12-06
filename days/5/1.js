/**
 * https://adventofcode.com/2021/day/5
 */

const data = inputFile();
const FIELD_SIZE = 1000;

const field = Array
  .from({ length: FIELD_SIZE })
  .map(() => Array.from({ length: FIELD_SIZE }).map(() => ({
    amt: 0,
  })));

for (const entry of data) {
  const [a, b] = entry.split(' -> ').map((coord) => coord.split(',').map(Number));
  const coords = {
    x1: Math.min(a[0],b[0]),
    x2: Math.max(a[0],b[0]),
    y1: Math.min(a[1],b[1]),
    y2: Math.max(a[1],b[1])
  };

  // Only horizontal or vertical
  if (coords.x1 !== coords.x2 && coords.y1 !== coords.y2)
    continue;

  for (let x = 0; x < FIELD_SIZE; x++) {
    for (let y = 0; y < FIELD_SIZE; y++) {
      if (x >= coords.x1 && x <= coords.x2 && y >= coords.y1 && y <= coords.y2) {
        field[y][x].amt++;
        // draw();
      }
    }
  }
}

// Draw field like in the example
function draw() {
  let str = '';

  for (const col of field) {
    for (const row of col) {
      str += !row.amt
        ? '.'
        : row.amt;
    }

    str += '\n';
  }

  console.log(str);
}

let c = 0;
for (const row of field) {
  for (const cell of row) {
    if (cell.amt > 1)
      c++;
  }
}

// draw();

console.log({answer: c});
