// Example 1: Basic Function Return

// Function that returns a value
function add(a, b) {
    return a + b;
  }
  
  const sum = add(5, 3);
  console.log(`Sum: ${sum}`); // Output: Sum: 8
  
  // Example 2: Return Without a Value
  
  // Function that returns nothing explicitly
  function logMessage(message) {
    console.log(message);
    // No return statement here, so it implicitly returns undefined
  }
  
  const result = logMessage('Hello, World!');
  console.log(`Result: ${result}`); // Output: Result: undefined
  
  // Example 3: Returning Multiple Values Using an Object
  
  // Function that returns multiple values
  function getUserInfo() {
    return {
      name: 'Alice',
      age: 30
    };
  }
  
  const user = getUserInfo();
  console.log(`User Name: ${user.name}`); // Output: User Name: Alice
  console.log(`User Age: ${user.age}`); // Output: User Age: 30
  
  // Example 4: Return Early
  
  // Function that demonstrates early return
  function checkNumber(num) {
    if (num <= 0) {
      return 'Number is not positive';
    }
    return 'Number is positive';
  }
  
  console.log(checkNumber(-5)); // Output: Number is not positive
  console.log(checkNumber(10)); // Output: Number is positive
  
  // Example 5: Return in Recursive Functions
  
  // Recursive function to calculate factorial
  function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    }
    return n * factorial(n - 1);
  }
  
  console.log(`Factorial of 5: ${factorial(5)}`); // Output: Factorial of 5: 120
  
  // Example 6: Returning from Arrow Functions
  
  // Arrow function that returns a value
  const square = (x) => x * x;
  
  console.log(`Square of 4: ${square(4)}`); // Output: Square of 4: 16
  
  // Arrow function with a block body and explicit return
  const addNumbers = (a, b) => {
    const result = a + b;
    return result;
  };
  
  console.log(`Sum of 7 and 3: ${addNumbers(7, 3)}`); // Output: Sum of 7 and 3: 10
  
  // Example 7: Return in Promise-Based Functions
  
  // Function that returns a promise
  function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Data fetched successfully');
      }, 1000);
    });
  }
  
  // Using the function and handling the promise
  fetchData().then(data => {
    console.log(data); // Output: Data fetched successfully
  });
  
  // Example 8: Return in Try-Catch-Finally Blocks
  
  // Function demonstrating try-catch-finally with return statements
  function safeDivide(a, b) {
    try {
      if (b === 0) {
        throw new Error('Division by zero');
      }
      return a / b;
    } catch (error) {
      console.error(error.message); // Output: Division by zero
      return null; // Return a default value in case of an error
    } finally {
      console.log('Operation completed'); // Always runs
    }
  }
  
  const resultDivision = safeDivide(10, 0);
  console.log(`Division Result: ${resultDivision}`); // Output: Division Result: null
  
  const resultDivisionSuccess = safeDivide(10, 2);
  console.log(`Division Result: ${resultDivisionSuccess}`); // Output: Division Result: 5
  