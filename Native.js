// Example 1: Native Array Methods

// Creating an array
const numbers = [1, 2, 3, 4, 5];

// Using native Array methods
const doubledNumbers = numbers.map(num => num * 2);
console.log(`Doubled Numbers: ${doubledNumbers}`); // Output: Doubled Numbers: 2,4,6,8,10

const filteredNumbers = numbers.filter(num => num % 2 === 0);
console.log(`Filtered Numbers (even): ${filteredNumbers}`); // Output: Filtered Numbers (even): 2,4

const sumOfNumbers = numbers.reduce((acc, num) => acc + num, 0);
console.log(`Sum of Numbers: ${sumOfNumbers}`); // Output: Sum of Numbers: 15

// Example 2: Native String Methods

// Creating a string
const text = "Hello, World!";

// Using native String methods
const upperCaseText = text.toUpperCase();
console.log(`Upper Case Text: ${upperCaseText}`); // Output: Upper Case Text: HELLO, WORLD!

const replacedText = text.replace('World', 'JavaScript');
console.log(`Replaced Text: ${replacedText}`); // Output: Replaced Text: Hello, JavaScript!

const splitText = text.split(', ');
console.log(`Split Text: ${splitText}`); // Output: Split Text: Hello,JavaScript!

// Example 3: Native Number Methods

// Creating numbers
const num1 = 42;
const num2 = 3.14159;

// Using native Number methods
const roundedNum = Math.round(num2);
console.log(`Rounded Number: ${roundedNum}`); // Output: Rounded Number: 3

const maxNumber = Math.max(num1, num2, 100);
console.log(`Max Number: ${maxNumber}`); // Output: Max Number: 100

const parsedNumber = Number.parseInt('1234', 10);
console.log(`Parsed Number: ${parsedNumber}`); // Output: Parsed Number: 1234

// Example 4: Native Object Methods

// Creating an object
const person = {
  name: 'Alice',
  age: 30,
  greet() {
    return `Hello, my name is ${this.name}`;
  }
};

// Using native Object methods
console.log(person.greet()); // Output: Hello, my name is Alice

// Adding a new property
person.job = 'Engineer';
console.log(person.job); // Output: Engineer

// Example 5: Native Date Methods

// Creating a Date object
const now = new Date();

// Using native Date methods
console.log(`Current Date and Time: ${now}`); // Output: Current Date and Time: (varies)

const today = now.toDateString();
console.log(`Today: ${today}`); // Output: Today: (varies)

const time = now.toTimeString();
console.log(`Current Time: ${time}`); // Output: Current Time: (varies)

// Example 6: Native Error Handling

// Using native Error object
try {
  throw new Error('This is an error message');
} catch (error) {
  console.error(`Caught Error: ${error.message}`); // Output: Caught Error: This is an error message
}

// Example 7: Native JSON Methods

// Creating an object
const user = {
  name: 'Bob',
  age: 25,
};

// Converting object to JSON string
const jsonString = JSON.stringify(user);
console.log(`JSON String: ${jsonString}`); // Output: JSON String: {"name":"Bob","age":25}

// Parsing JSON string back to object
const parsedUser = JSON.parse(jsonString);
console.log(`Parsed User:`, parsedUser); // Output: Parsed User: { name: 'Bob', age: 25 }
