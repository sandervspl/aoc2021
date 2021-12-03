/**
 * https://adventofcode.com/2021/day/3
 */

const data = inputFile();
let g = e = '';

for (let i = 0; i < data[0].length; i++) {
  let c = { 0: 0, 1: 0 };
  
  for (let j = 0; j < data.length; j++) {
    c[data[j][i]]++;
  }

  const n = Object.entries(c).filter(([,n]) => Boolean(n));

  if (n[0][1] > n[1][1]) {
    g += n[0][0];
    e += n[1][0];
  } else {
    g += n[1][0];
    e += n[0][0];
  }
}

console.log({
  answer: parseInt(g,2) * parseInt(e,2)
});
