// Example 1: Using `default` in a `switch` statement
function getMonthName(monthNumber) {
    let monthName;
  
    switch (monthNumber) {
      case 1:
        monthName = 'January';
        break;
      case 2:
        monthName = 'February';
        break;
      case 3:
        monthName = 'March';
        break;
      case 4:
        monthName = 'April';
        break;
      case 5:
        monthName = 'May';
        break;
      case 6:
        monthName = 'June';
        break;
      case 7:
        monthName = 'July';
        break;
      case 8:
        monthName = 'August';
        break;
      case 9:
        monthName = 'September';
        break;
      case 10:
        monthName = 'October';
        break;
      case 11:
        monthName = 'November';
        break;
      case 12:
        monthName = 'December';
        break;
      default:
        monthName = 'Invalid month number'; // `default` case handles invalid input
        break;
    }
  
    console.log(`Month ${monthNumber} is ${monthName}`);
  }
  
  // Example 2: Using `default` parameters in functions
  function createGreeting(name = 'Guest', greeting = 'Hello') {
    return `${greeting}, ${name}!`;
  }
  
  // Test the `switch` statement with various inputs
  getMonthName(5);   // Output: Month 5 is May
  getMonthName(13);  // Output: Month 13 is Invalid month number
  
  // Test the function with default parameters
  console.log(createGreeting());                 // Output: Hello, Guest!
  console.log(createGreeting('Alice'));          // Output: Hello, Alice!
  console.log(createGreeting('Alice', 'Welcome')); // Output: Welcome, Alice!
  console.log(createGreeting(undefined, 'Hi')); // Output: Hi, Guest!
  