// Function to demonstrate the use of the void operator
function demonstrateVoid() {
    // Example 1: Using void with a function expression
    const result = void function() {
      console.log('This function does not return anything.');
    }(); // Immediately invoked function expression (IIFE)
  
    console.log('Result of void function:', result); // Output: Result of void function: undefined
  
    // Example 2: Using void to prevent the default action in a link
    const link = document.createElement('a');
    link.href = 'javascript:void(0);'; // Prevents navigation when the link is clicked
    link.textContent = 'Click me';
    
    link.addEventListener('click', function() {
      console.log('Link clicked, but does not navigate.');
    });
    
    document.body.appendChild(link);
  }
  
  // Example usage
  demonstrateVoid();
  