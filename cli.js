const { fork } = require('child_process');

// Get day number from args
const [,,...args] = process.argv
const [day] = args

// Let user know he is dumb
if (day == null) {
  console.error('ERROR: PASS A DAY NUMBER');
  process.exit(1);
}

process.env.DAY = day;

// Run day file with node
fork(`${day}/index.js`);
