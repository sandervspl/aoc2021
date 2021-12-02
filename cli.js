const { fork } = require('child_process');

// Get day number from args
const [,,...args] = process.argv
const [day, part = 1] = args

// Let user know he is dumb
if (day == null) {
  console.error('ERROR: GIVE A DAY NUMBER');
  process.exit(1);
}
if (part == null) {
  console.error('ERROR: GIVE "1" OR "2" AS SECOND ARGUMENT');
  process.exit(1);
}

process.env.DAY = day;

// Run day file with node
fork(`days/${day}/${part}.js`);
