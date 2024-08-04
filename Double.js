// Function to perform various arithmetic operations with floating-point numbers
function doublePrecisionDemo() {
    const a = 0.123456789012345;
    const b = 0.987654321098765;
  
    // Addition
    const sum = a + b;
    console.log(`Sum: ${a} + ${b} = ${sum}`);
  
    // Subtraction
    const difference = a - b;
    console.log(`Difference: ${a} - ${b} = ${difference}`);
  
    // Multiplication
    const product = a * b;
    console.log(`Product: ${a} * ${b} = ${product}`);
  
    // Division
    const quotient = a / b;
    console.log(`Quotient: ${a} / ${b} = ${quotient}`);
  
    // Checking precision
    console.log(`Precision Issue: ${a} + ${b} - ${b} === ${a}? ${Math.abs((a + b) - b - a) < Number.EPSILON}`);
  
    // Rounding
    const roundedSum = Math.round(sum * 1e10) / 1e10;
    console.log(`Rounded Sum (to 10 decimal places): ${roundedSum}`);
  }
  
  // Run the demonstration
  doublePrecisionDemo();
  