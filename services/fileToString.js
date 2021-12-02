const path = require('path');
const fs = require('fs');


exports.fileToString = function (fileName) {
  const file = path.resolve('days', process.env.DAY, fileName);

  return fs.readFileSync(file, { encoding: 'utf8' });
}
