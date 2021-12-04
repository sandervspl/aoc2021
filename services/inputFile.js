const path = require('path');
const fs = require('fs');


export function inputFile(fileName = 'input', split = '\n') {
  const file = path.resolve('days', __DAY__, fileName);
  const buffer = fs.readFileSync(file, 'utf8');

  return split ? buffer.split(split) : buffer;
}
