// Import named exports from math.js
import { PI, add, subtract } from './math.js';

// Import default export from greeting.js
import greet from './greeting.js';

// Import both named and default exports from utilities.js
import log, { version } from './utilities.js';

// Using the imported values
console.log(`PI: ${PI}`);                // Output: PI: 3.14159
console.log(`Add: ${add(5, 3)}`);        // Output: Add: 8
console.log(`Subtract: ${subtract(9, 4)}`); // Output: Subtract: 5

console.log(greet('Alice'));             // Output: Hello, Alice!

log(`Version: ${version}`);              // Output: Version: 1.0
