// 1. Function Declaration
function greet(name) {
    return `Hello, ${name}!`;
  }
  
  console.log(greet('Alice')); // Output: Hello, Alice!
  console.log(greet('Bob'));   // Output: Hello, Bob!
  
  // 2. Function Expression
  const add = function(a, b) {
    return a + b;
  };
  
  console.log(add(5, 3)); // Output: 8
  
  // 3. Arrow Function (ES6)
  const multiply = (x, y) => x * y;
  
  console.log(multiply(4, 6)); // Output: 24
  
  // 4. Function with Default Parameters
  function introduce(name, age = 25) {
    return `My name is ${name} and I am ${age} years old.`;
  }
  
  console.log(introduce('Charlie')); // Output: My name is Charlie and I am 25 years old.
  console.log(introduce('Diana', 30)); // Output: My name is Diana and I am 30 years old.
  
  // 5. Function Returning Another Function
  function createCounter() {
    let count = 0;
    return function() {
      count++;
      return count;
    };
  }
  
  const counter = createCounter();
  console.log(counter()); // Output: 1
  console.log(counter()); // Output: 2
  console.log(counter()); // Output: 3
  
  // 6. IIFE (Immediately Invoked Function Expression)
  (function() {
    console.log('This is an IIFE!');
  })();
  // Output: This is an IIFE!
  
  // 7. Function with Rest Parameters
  function sum(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
  }
  
  console.log(sum(1, 2, 3));       // Output: 6
  console.log(sum(10, 20, 30, 40)); // Output: 100
  
  // 8. Function with a Return Value
  function square(num) {
    return num * num;
  }
  
  console.log(square(7)); // Output: 49
  
  // 9. Function as an Argument
  function operateOnNumbers(x, y, operation) {
    return operation(x, y);
  }
  
  const result = operateOnNumbers(10, 5, (a, b) => a - b);
  console.log(result); // Output: 5
  
  // 10. Recursive Function
  function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
  }
  
  console.log(factorial(5)); // Output: 120
  