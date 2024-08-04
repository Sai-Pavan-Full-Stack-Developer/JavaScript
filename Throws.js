/**
 * Function that may throw an error.
 * @param {number} a - The numerator.
 * @param {number} b - The denominator.
 * @returns {number} The result of the division.
 * @throws {Error} Throws an error if the denominator is zero.
 */
function divide(a, b) {
    if (b === 0) {
      throw new Error('Division by zero is not allowed'); // Throwing an error
    }
    return a / b;
  }
  
  /**
   * Function to perform a division and handle any potential errors.
   * @param {number} a - The numerator.
   * @param {number} b - The denominator.
   */
  function performDivision(a, b) {
    try {
      const result = divide(a, b);
      console.log(`Result: ${result}`);
    } catch (error) {
      console.error(`Caught an error: ${error.message}`); // Handling the error
    } finally {
      console.log('Division attempt completed'); // Executes whether an error occurred or not
    }
  }
  
  // Example usage
  performDivision(10, 2); // Output: Result: 5
  performDivision(10, 0); // Output: Caught an error: Division by zero is not allowed
                           //         Division attempt completed
  