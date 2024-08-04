// Function to check if a number is even
function isEven(number) {
    return number % 2 === 0; // Returns true if the number is even, false otherwise
  }
  
  // Function to check if a string is non-empty
  function isNonEmptyString(str) {
    return Boolean(str); // Converts the string to a Boolean value (true if non-empty, false if empty)
  }
  
  // Function to check if a number is within a specific range
  function isInRange(value, min, max) {
    return value >= min && value <= max; // Returns true if value is between min and max (inclusive)
  }
  
  // Function to demonstrate Boolean operations
  function booleanOperations(a, b) {
    console.log(`a = ${a}, b = ${b}`);
    
    // Logical AND
    console.log(`a && b: ${a && b}`); // true if both a and b are true
    
    // Logical OR
    console.log(`a || b: ${a || b}`); // true if at least one of a or b is true
    
    // Logical NOT
    console.log(`!a: ${!a}`); // true if a is false
    console.log(`!b: ${!b}`); // true if b is false
  }
  
  // Test the functions with different inputs
  console.log(`Is 4 even? ${isEven(4)}`); // Output: true
  console.log(`Is 7 even? ${isEven(7)}`); // Output: false
  
  console.log(`Is "hello" a non-empty string? ${isNonEmptyString("hello")}`); // Output: true
  console.log(`Is "" a non-empty string? ${isNonEmptyString("")}`); // Output: false
  
  console.log(`Is 5 in the range 1 to 10? ${isInRange(5, 1, 10)}`); // Output: true
  console.log(`Is 15 in the range 1 to 10? ${isInRange(15, 1, 10)}`); // Output: false
  
  // Demonstrate Boolean operations
  booleanOperations(true, false);  // Output: true, false, false, true
  booleanOperations(0, 1);         // Output: 0, 1, true, false
  booleanOperations("text", "");   // Output: text, text, false, true
  