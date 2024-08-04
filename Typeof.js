// Declare various variables with different types
const number = 42;
const string = 'Hello, world!';
const boolean = true;
const object = { key: 'value' };
const array = [1, 2, 3];
const func = function() { return 'I am a function'; };
const nullValue = null;
const undefinedValue = undefined;

// Function to log the type of various variables
function checkTypes() {
  console.log('Type of number:', typeof number); // Output: number
  console.log('Type of string:', typeof string); // Output: string
  console.log('Type of boolean:', typeof boolean); // Output: boolean
  console.log('Type of object:', typeof object); // Output: object
  console.log('Type of array:', typeof array); // Output: object (arrays are objects in JavaScript)
  console.log('Type of function:', typeof func); // Output: function
  console.log('Type of null:', typeof nullValue); // Output: object (historical bug in JavaScript)
  console.log('Type of undefined:', typeof undefinedValue); // Output: undefined
}

// Example usage
checkTypes();
