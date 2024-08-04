function riskyOperation() {
    // Simulate a situation that might throw an error
    const randomNumber = Math.random();
    if (randomNumber < 0.5) {
      throw new Error('Something went wrong'); // Throwing an error
    }
    return 'Operation successful';
  }
  
  function performOperation() {
    try {
      const result = riskyOperation();
      console.log(result); // If no error is thrown, log the result
    } catch (error) {
      console.error('Caught an error:', error.message); // Handle the error
    } finally {
      console.log('Operation attempt completed'); // Cleanup or final actions
    }
  }
  
  // Example usage
  performOperation();
  