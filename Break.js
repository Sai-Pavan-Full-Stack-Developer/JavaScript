// Example 1: Using `break` in a `for` loop
function findFirstNegative(numbers) {
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] < 0) {
        console.log(`First negative number found: ${numbers[i]}`);
        break; // Exit the loop as soon as a negative number is found
      }
    }
  }
  
  // Example 2: Using `break` in a `while` loop
  function countToLimit(limit) {
    let count = 0;
    while (true) {
      console.log(count);
      count++;
      if (count >= limit) {
        console.log(`Count reached limit: ${limit}`);
        break; // Exit the loop when the count reaches or exceeds the limit
      }
    }
  }
  
  // Example 3: Using `break` in a `switch` statement
  function getDayName(dayNumber) {
    let dayName;
    switch (dayNumber) {
      case 1:
        dayName = 'Monday';
        break;
      case 2:
        dayName = 'Tuesday';
        break;
      case 3:
        dayName = 'Wednesday';
        break;
      case 4:
        dayName = 'Thursday';
        break;
      case 5:
        dayName = 'Friday';
        break;
      case 6:
        dayName = 'Saturday';
        break;
      case 7:
        dayName = 'Sunday';
        break;
      default:
        dayName = 'Invalid day number';
        break;
    }
    console.log(`Day ${dayNumber} is ${dayName}`);
  }
  
  // Test the functions
  findFirstNegative([3, 5, -1, 7, 2]); // Output: First negative number found: -1
  countToLimit(5);                   // Output: 0, 1, 2, 3, 4, Count reached limit: 5
  getDayName(3);                     // Output: Day 3 is Wednesday
  getDayName(10);                    // Output: Day 10 is Invalid day number
  