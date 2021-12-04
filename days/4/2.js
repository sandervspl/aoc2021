/**
 * https://adventofcode.com/2021/day/4#part2
 */

let [nums, ...data] = inputFile();

// Generate boards as arrays
data = data.filter((row) => row);
let boards = [];
let rows = [];

for (let i = 0; i < data.length; i++) {
  rows.push(data[i].split(' ').filter(Number).map(Number));

  if (rows.length % 5 === 0) {
    boards.push(rows);
    rows = [];
  }
}

// Generate array of drawn numbers
nums = nums.toString().split(',').map(Number);

let numList = [];
let ignoreBoardIds = [];
let lastMatch = { num: 0, list: [] };

for (const num of nums) {
  numList.push(num);

  for (let b = 0; b < boards.length; b++) {
    if (ignoreBoardIds.includes(b)) continue;

    const board = boards[b];
    for (let i = 0; i < board.length; i++) {
      // horizontal
      if (board[i].every((num) => numList.includes(num))) {
        ignoreBoardIds.push(b);
        lastMatch = {num, list: [...numList]};
        continue;
      }
      
      // vertical
      let col = [];

      for (let j = 0; j < board.length; j++) {
        col.push(board[j][i]);
      }

      if (col.every((num) => numList.includes(num))) {
        ignoreBoardIds.push(b);
        lastMatch = {num, list: [...numList]};
      }
    }
  }
}

function calcAnswer(board) {
  let sum = 0;

  for (const row of board) {
    for (const num of row) {
      if (!lastMatch.list.includes(num)) {
        sum += num;
      }
    }
  }

  console.log({ answer: sum * lastMatch.num });
}

calcAnswer(boards[ignoreBoardIds.pop()]);
