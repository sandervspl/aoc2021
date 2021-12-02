const { fork } = require('child_process');

// Get day number from args
const [,,...args] = process.argv
const [day, part] = args

// Let user know they are dumb
if (day == null) {
  console.error('ERROR: GIVE A DAY NUMBER');
  process.exit(1);
}
if (part == null) {
  console.error('ERROR: GIVE "1" OR "2" AS SECOND ARGUMENT');
  process.exit(1);
}

let nodeFork;

require('esbuild').build({
  entryPoints: [`days/${day}/${part}.js`],
  bundle: true,
  outfile: 'dist/main.js',
  platform: 'node',
  target: 'node12',
  inject: require('fs').readdirSync('services').map(file => `services/${file}`),
  define: {
    '__DAY__': JSON.stringify(day),
  },
  watch: {
    onRebuild(err) {
      if (err) {
        console.error('watch build failed:', err);
        process.exit(1);
      }

      console.info('Rebuilding...');

      nodeFork.kill();
      nodeFork = fork('dist/main.js');
    },
  },
})
  .then(() => {
    // Run day file with node
    nodeFork = fork('dist/main.js');
  })
