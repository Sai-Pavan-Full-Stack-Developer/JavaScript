// Declare a constant variable
const pi = 3.14159;

console.log('Value of pi:', pi);

// Attempting to reassign a const variable will result in an error
// Uncomment the next line to see the error
// pi = 3.14; // TypeError: Assignment to constant variable.

// Working with const and objects
const person = {
    name: 'Pavan',
    age: 30
};

console.log('Person:', person);

// You can modify the properties of a const object
person.name = 'Pavan';
person.age = 25;

console.log('Modified Person:', person);

// You cannot reassign the object itself
// Uncomment the next line to see the error
// person = { name: 'Alice', age: 35 }; // TypeError: Assignment to constant variable.

// Working with const and arrays
const colors = ['red', 'green', 'blue'];

console.log('Colors:', colors);

// You can modify the elements of a const array
colors.push('yellow');
colors[0] = 'purple';

console.log('Modified Colors:', colors);

// You cannot reassign the array itself
// Uncomment the next line to see the error
// colors = ['black', 'white']; // TypeError: Assignment to constant variable.