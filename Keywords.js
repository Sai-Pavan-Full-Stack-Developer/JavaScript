// `var` declares a variable with function scope
var globalVar = "I am a global variable";

// `let` declares a block-scoped variable
let blockScopedVar = "I am block-scoped";

// `const` declares a block-scoped constant
const constantValue = 42;

function exampleFunction() {
  // `function` declares a function
  function innerFunction() {
    // `this` refers to the current object
    console.log(this); // Output depends on how the function is called

    // `try`, `catch`, and `finally` for error handling
    try {
      // `throw` can be used to throw an error
      throw new Error("Something went wrong");
    } catch (error) {
      console.log("Caught an error:", error.message);
    } finally {
      console.log("This block always runs");
    }
  }

  // `return` exits the function and optionally returns a value
  return "Returned from function";
}

// `class` declares a class
class ExampleClass {
  constructor(name) {
    this.name = name;
  }

  greet() {
    // `this` refers to the current instance of ExampleClass
    return `Hello, ${this.name}`;
  }
}

// `new` creates an instance of ExampleClass
const exampleInstance = new ExampleClass("Alice");
console.log(exampleInstance.greet()); // Output: Hello, Alice

// `switch` statement to select among multiple options
let day = 2;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday"); // Output: Tuesday
    break;
  default:
    console.log("Other day");
}

// `for` loop example
for (let i = 0; i < 3; i++) {
  if (i === 1) {
    // `continue` skips the rest of this iteration
    continue;
  }
  console.log(i); // Output: 0 2
}

// `while` loop example
let count = 0;
while (count < 3) {
  console.log(count); // Output: 0 1 2
  count++;
}

// `do...while` loop example
count = 0;
do {
  console.log(count); // Output: 0 1 2
  count++;
} while (count < 3);

// `switch` case example with `break` to exit the switch
let fruit = 'apple';
switch (fruit) {
  case 'banana':
    console.log("Yellow fruit");
    break;
  case 'apple':
    console.log("Red or green fruit"); // Output: Red or green fruit
    break;
  default:
    console.log("Unknown fruit");
}

// `with` is deprecated and generally avoided
let obj = { x: 10, y: 20 };
with (obj) {
  console.log(x + y); // Output: 30
}

// `export` and `import` are used in modules, demonstrating with comments
// export const pi = 3.14;
// import { pi } from './module.js';

// `async` and `await` are used for handling asynchronous code
async function fetchData() {
  // `await` pauses execution until the Promise resolves
  let response = await fetch('https://api.example.com/data');
  let data = await response.json();
  console.log(data);
}

// `yield` is used in generator functions
function* generatorExample() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = generatorExample();
console.log(gen.next().value); // Output: 1
console.log(gen.next().value); // Output: 2
console.log(gen.next().value); // Output: 3

// `instanceof` checks if an object is an instance of a class
console.log(exampleInstance instanceof ExampleClass); // Output: true

// `delete` removes a property from an object
delete exampleInstance.name;
console.log(exampleInstance); // Output: ExampleClass { }

// `typeof` returns the type of a variable
console.log(typeof globalVar); // Output: string

// `void` evaluates an expression and returns `undefined`
console.log(void 0); // Output: undefined

// `break` to exit from a loop
for (let i = 0; i < 5; i++) {
  if (i === 2) {
    break; // Exits the loop
  }
  console.log(i); // Output: 0 1
}

// `continue` to skip the rest of the loop iteration
for (let i = 0; i < 5; i++) {
  if (i === 2) {
    continue; // Skips this iteration
  }
  console.log(i); // Output: 0 1 3 4
}

// `case` is used in switch statements
let number = 2;
switch (number) {
  case 1:
    console.log("One");
    break;
  case 2:
    console.log("Two"); // Output: Two
    break;
  default:
    console.log("Default");
}
