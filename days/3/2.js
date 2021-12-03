/**
 * https://adventofcode.com/2021/day/3#part2
 */

 const input = inputFile();
 let oxy = co2 = '';

function loop(data = input, acc = '', charIdx = 0) {
  if (data.length <= 1) {
    return data[0];
  }

  let c = { 0: 0, 1: 0 };
  for (let value of data) {
    c[value[charIdx]]++;
  }

  if (oxy.length) {
    acc += c[0] > c[1] ? 0 : 1
  } else {
    acc += c[0] <= c[1] ? 0 : 1
  }

  return loop(
    data.filter((v) => v.startsWith(acc)),
    acc,
    ++charIdx,
  );
}

oxy = loop();
co2 = loop();

console.log({
  answer: parseInt(oxy,2) * parseInt(co2,2)
});
