function countdown(start) {
    // Print a countdown from the start number to 0
    while (start >= 0) {
      console.log(start);
      start--; // Decrement the number
    }
    console.log('Countdown finished!');
  }
  
  // Example usage
  countdown(5);
  