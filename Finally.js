function divide(a, b) {
    try {
      if (b === 0) {
        throw new Error('Division by zero is not allowed');
      }
      return a / b;
    } catch (error) {
      console.error('Error:', error.message);
      return null;
    } finally {
      console.log('Division operation completed.');
    }
  }
  
  console.log(divide(10, 2));  // Output: 5
  // Output:
  // Division operation completed.
  
  console.log(divide(10, 0));  // Output: Error: Division by zero is not allowed
  // Output:
  // Division operation completed.
  