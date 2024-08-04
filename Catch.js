// Function to divide two numbers
function divide(a, b) {
    try {
      // Check if the denominator is zero
      if (b === 0) {
        throw new Error('Division by zero is not allowed');
      }
      
      // Perform division
      const result = a / b;
      
      // Return the result
      return result;
    } catch (error) {
      // Handle errors
      console.error(`Error: ${error.message}`);
      return null; // Return null or an appropriate value in case of an error
    } finally {
      // Code to execute regardless of whether an error occurred or not
      console.log('Division attempt completed.');
    }
  }
  
  // Test the function with different inputs
  console.log(divide(10, 2));  // Output: 5
  console.log(divide(10, 0));  // Output: Error: Division by zero is not allowed
                               // Output: Division attempt completed.
                               // Output: null
  console.log(divide(10, 5));  // Output: 2
  