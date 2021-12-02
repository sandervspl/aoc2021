# aoc2021

https://adventofcode.com/2021

## How to use

1. Stick to the `days\<day#>\<part#>.js` structure
2. Create your `input` file (no extension) in the day directory
3. Write this in your terminal to start
```bash
$ npm run start day# part#
```

For day 1 / part 1 that would be `npm run start 1 1`


### input data
To get the input data in your code you can use the global `inputFile` function
```js
const data = inputFile();
```

This will return an array of the input data split by newline.
If you want more control you can do that in multiple ways

```js
// Split by ":"
const data = inputFile('input', ':');

// Don't split, return as String
const data = inputFile('input', false);

// If file name is different than "input"
const data = inputFile('input2');
```

### services
All service files are injected globally as the name the function is exported as.

```js
// services/addOne.js
export function addOne() { ... }

// This would be globally available in your code as "addOne"
```
