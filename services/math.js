Math.sum = function (numbers) {
  return numbers.reduce((a, b) => a + b, 0);
};

Math.mean = function (numbers) {
  return Math.sum(numbers) / numbers.length;
};

Math.median = function (numbers) {
  let median;
  let sorted = numbers.sort();
  let middle = Math.floor(sorted.length / 2);
  if (sorted.length % 2) {
    median = sorted[middle];
  } else {
    median = (sorted[middle - 1] + sorted[middle]) / 2;
  }
  return median;
};

Math.mode = function (numbers) {
  let mode = {};
  let maxCount = 0;
  for (const number of numbers) {
    if (!mode[number]) {
      mode[number] = 0;
    }
    mode[number]++;
    if (mode[number] > maxCount) {
      maxCount = mode[number];
    }
  }
  let modes = [];
  for (let number in mode) {
    if (mode[number] === maxCount) {
      modes.push(number);
    }
  }
  return modes.map(Number);
};

Math.range = function (numbers) {
  numbers.sort();
  return [numbers[0], numbers.last()];
};
