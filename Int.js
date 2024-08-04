// Defining integer values
const a = 10; // Integer
const b = 20; // Integer

// Basic arithmetic operations
const sum = a + b; // Addition
const difference = b - a; // Subtraction
const product = a * b; // Multiplication
const quotient = b / a; // Division
const remainder = b % a; // Modulus (remainder)

// Display results
console.log(`Sum: ${sum}`); // Output: Sum: 30
console.log(`Difference: ${difference}`); // Output: Difference: 10
console.log(`Product: ${product}`); // Output: Product: 200
console.log(`Quotient: ${quotient}`); // Output: Quotient: 2
console.log(`Remainder: ${remainder}`); // Output: Remainder: 0

// Integer-specific operations

// Converting a floating-point number to an integer using Math.floor
const floatNumber = 10.75;
const intNumber = Math.floor(floatNumber);
console.log(`Integer part of ${floatNumber} is ${intNumber}`); // Output: Integer part of 10.75 is 10

// Checking if a number is an integer
const checkInteger = Number.isInteger(a);
console.log(`Is ${a} an integer? ${checkInteger}`); // Output: Is 10 an integer? true

// Using bitwise operators (often used with integers)
const bitwiseAnd = a & b; // Bitwise AND
const bitwiseOr = a | b; // Bitwise OR

console.log(`Bitwise AND: ${bitwiseAnd}`); // Output: Bitwise AND: 0
console.log(`Bitwise OR: ${bitwiseOr}`); // Output: Bitwise OR: 30

// Performing integer division (flooring division)
const integerDivision = Math.floor(b / a);
console.log(`Integer division of ${b} by ${a} is ${integerDivision}`); // Output: Integer division of 20 by 10 is 2
