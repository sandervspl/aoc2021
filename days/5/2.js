/**
 * https://adventofcode.com/2021/day/5
 */

const data = inputFile('input');
const FIELD_SIZE = 1000;

const field = Array
  .from({ length: FIELD_SIZE })
  .map(() => Array.from({ length: FIELD_SIZE }).map(() => ({
    amt: 0,
  })));

console.time('');
for (const entry of data) {
  const [a, b] = entry.split(' -> ').map((coord) => coord.split(',').map(Number));
  let coords = {
    x1: a[0], x2: b[0],
    y1: a[1], y2: b[1],
  };

  // Horizontal & vertical
  if (coords.x1 === coords.x2 || coords.y1 === coords.y2) {
    coords = {
      x1: Math.min(a[0],b[0]),
      x2: Math.max(a[0],b[0]),
      y1: Math.min(a[1],b[1]),
      y2: Math.max(a[1],b[1])
    };

    for (let x = 0; x < FIELD_SIZE; x++) {
      for (let y = 0; y < FIELD_SIZE; y++) {
        if (x >= coords.x1 && x <= coords.x2 && y >= coords.y1 && y <= coords.y2) {
          field[y][x].amt++;
          // draw();
        }
      }
    }
  // Diagonally
  } else {
    function traverse({ x1, y1, x2, y2 }) {
      // Up the cell
      ++field[y1][x1].amt;
      // draw();

      // Done
      if (x1 === x2 && y1 === y2) {
        return;
      }

      let x = x1;
      let y = y1;

      if (x < x2) {
        x++;
      } else if (x > x2) {
        x--;
      }

      if (y < y2) {
        y++;
      } else if (y > y2) {
        y--;
      }

      traverse({ x1: x, y1: y, x2, y2 });
    }

    traverse(coords);
  }
}

// Draw field like in the example
function draw() {
  if (FIELD_SIZE > 10)
    return;

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

draw();

console.log({ answer: c });
console.timeEnd('');
