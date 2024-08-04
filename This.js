// Global context
console.log(this); // Output: [object Window] in browsers, global object in Node.js

// Function in global context
function globalFunction() {
  console.log(this); // Output: [object Window] in browsers, global object in Node.js
}
globalFunction();

// Method in an object
const person = {
  name: 'Alice',
  greet: function() {
    console.log(this.name); // Output: Alice
  }
};
person.greet();

// Constructor function
function Person(name) {
  this.name = name;
}

const person1 = new Person('Bob');
console.log(person1.name); // Output: Bob

// Method in an object created with a constructor
Person.prototype.sayHello = function() {
  console.log(`Hello, my name is ${this.name}`);
};

person1.sayHello(); // Output: Hello, my name is Bob

// Arrow functions
const arrowFunction = () => {
  console.log(this); // Arrow functions do not have their own `this`; it takes `this` from the surrounding lexical context
};

arrowFunction(); // Output depends on the context where arrowFunction is defined

// `this` with Event Handlers
document.getElementById('button').addEventListener('click', function() {
  console.log(this); // Output: the button element that was clicked
});
