/**
 * https://adventofcode.com/2021/day/4
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
let found = false;
for (const num of nums) {
  numList.push(num);

  for (const board of boards) {
    for (let i = 0; i < board.length; i++) {
      // horizontal
      if (!found && board[i].every((num) => numList.includes(num))) {
        // console.log('found row matching all nums');
        // console.log(row, nums);
        found = true;
        calcAnswer(board);
        break;
      }
      
      // vertical
      let col = [];
      for (let j = 0; j < board.length; j++) {
        col.push(board[j][i]);
      }
      if (!found && col.every((num) => numList.includes(num))) {
        // console.log('found column matching all nums');
        // console.log(board, {i}, numList);
        found = true;
        calcAnswer(board);
        break;
      }
    }
  }
}

function calcAnswer(board) {
  let sum = 0;
  for (const row of board) {
    for (const num of row) {
      if (!numList.includes(num)) {
        sum += num;
      }
    }
  }
  console.log({ answer: sum * numList[numList.length-1] });
}
