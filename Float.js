// Define floating-point numbers
const num1 = 0.1;
const num2 = 0.2;

// Add floating-point numbers
const sum = num1 + num2;
console.log(`Sum: ${sum}`); // Output: Sum: 0.30000000000000004

// Subtract floating-point numbers
const difference = num2 - num1;
console.log(`Difference: ${difference}`); // Output: Difference: 0.1

// Multiply floating-point numbers
const product = num1 * num2;
console.log(`Product: ${product}`); // Output: Product: 0.02

// Divide floating-point numbers
const quotient = num2 / num1;
console.log(`Quotient: ${quotient}`); // Output: Quotient: 2

// Floating-point precision issue
const result = 0.1 + 0.2 === 0.3;
console.log(`0.1 + 0.2 === 0.3: ${result}`); // Output: 0.1 + 0.2 === 0.3: false

// Workaround for floating-point precision issues
const isEqual = Math.abs((0.1 + 0.2) - 0.3) < Number.EPSILON;
console.log(`0.1 + 0.2 approximately equals 0.3: ${isEqual}`); // Output: 0.1 + 0.2 approximately equals 0.3: true
