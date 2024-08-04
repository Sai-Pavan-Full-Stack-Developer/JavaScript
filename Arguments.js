// Function with a fixed number of parameters
function greet(name, age) {
    console.log(`Hello, my name is ${name} and I am ${age} years old.`);
  }
  
  // Function with a variable number of arguments
  function addNumbers(...numbers) {
    // Using the rest parameter to handle an arbitrary number of arguments
    const sum = numbers.reduce((total, num) => total + num, 0);
    console.log(`The sum is ${sum}.`);
  }
  
  // Function with default parameters
  function multiply(a, b = 1) {
    // 'b' has a default value of 1 if not provided
    console.log(`The result of multiplying ${a} by ${b} is ${a * b}.`);
  }
  
  // Function with arguments and the 'arguments' object
  function printArguments() {
    // The 'arguments' object is an array-like object that holds all arguments passed to the function
    console.log('Arguments passed:', ...arguments);
  }
  
  // Calling the functions with different arguments
  
  // Fixed number of parameters
  greet('Alice', 30);  // Output: Hello, my name is Alice and I am 30 years old.
  
  // Variable number of arguments
  addNumbers(1, 2, 3, 4, 5);  // Output: The sum is 15.
  
  // Default parameters
  multiply(5);             // Output: The result of multiplying 5 by 1 is 5.
  multiply(5, 3);          // Output: The result of multiplying 5 by 3 is 15.
  
  // 'arguments' object
  printArguments(10, 'hello', true, [1, 2, 3]);  // Output: Arguments passed: 10 hello true [1, 2, 3]
  