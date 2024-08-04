// Example 1: Assigning and Checking Null Values

// Assigning null to a variable
let user = null;

console.log(user); // Output: null

// Checking if a variable is null
if (user === null) {
  console.log('The user variable is null.'); // Output: The user variable is null.
}

// Example 2: Default Values with Null

// Function with default parameter value
function greet(name = null) {
  // If name is null, use a default value
  const greeting = name === null ? 'Guest' : name;
  return `Hello, ${greeting}!`;
}

console.log(greet()); // Output: Hello, Guest!
console.log(greet('Alice')); // Output: Hello, Alice!

// Example 3: Using Null in Objects

// Creating an object with a null property
const person = {
  name: 'John',
  age: null // Age is not set yet
};

console.log(person.age); // Output: null

// Setting the property later
person.age = 30;
console.log(person.age); // Output: 30

// Example 4: Null and Type Checking

// Null type checking
console.log(typeof null); // Output: object

// Example 5: Null with Functions

// Function that returns null
function findUser(userId) {
  // Simulate a database lookup
  const database = {
    1: 'Alice',
    2: 'Bob'
  };

  return database[userId] || null; // Return null if user is not found
}

console.log(findUser(1)); // Output: Alice
console.log(findUser(3)); // Output: null

// Example 6: Null and Array Operations

// Using null in arrays
const array = [1, 2, null, 4];

console.log(array); // Output: [1, 2, null, 4]

// Checking if elements are null
array.forEach((item, index) => {
  if (item === null) {
    console.log(`Element at index ${index} is null.`); // Output: Element at index 2 is null.
  }
});

// Example 7: Null vs Undefined

// Null vs Undefined comparison
let a;
let b = null;

console.log(a); // Output: undefined
console.log(b); // Output: null

console.log(a === b); // Output: false
console.log(a == b); // Output: true

// Example 8: Using Null with Optional Chaining (ES2020+)

// Object with optional chaining
const userProfile = {
  name: 'Alice',
  address: null
};

console.log(userProfile.address?.city); // Output: undefined (address is null, so address.city is not accessed)

// Example 9: Null in JSON

// Creating an object with a null property
const jsonObject = {
  key1: 'value1',
  key2: null
};

// Converting object to JSON string
const jsonString = JSON.stringify(jsonObject);
console.log(jsonString); // Output: {"key1":"value1","key2":null}

// Parsing JSON string back to object
const parsedObject = JSON.parse(jsonString);
console.log(parsedObject); // Output: { key1: 'value1', key2: null }
