// Example 1: Using Constructor Functions

// Constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function() {
      return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    };
  }
  
  // Creating an instance using new
  const person1 = new Person('Alice', 30);
  console.log(person1.greet()); // Output: Hello, my name is Alice and I am 30 years old.
  
  // Example 2: Using ES6 Classes
  
  // ES6 class
  class Car {
    constructor(make, model, year) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
  
    getDetails() {
      return `${this.year} ${this.make} ${this.model}`;
    }
  }
  
  // Creating an instance using new
  const car1 = new Car('Toyota', 'Corolla', 2022);
  console.log(car1.getDetails()); // Output: 2022 Toyota Corolla
  
  // Example 3: Constructor Function with Prototype Method
  
  // Constructor function with prototype method
  function Animal(name) {
    this.name = name;
  }
  
  // Adding method to the prototype
  Animal.prototype.speak = function() {
    return `${this.name} makes a sound.`;
  };
  
  // Creating an instance using new
  const animal1 = new Animal('Lion');
  console.log(animal1.speak()); // Output: Lion makes a sound.
  
  // Example 4: Using new with Built-In Objects
  
  // Creating a new Date object
  const now = new Date();
  console.log(`Current Date and Time: ${now}`); // Output: Current Date and Time: (varies)
  
  // Creating a new RegExp object
  const regex = new RegExp('\\d+');
  console.log(`RegExp Pattern: ${regex}`); // Output: RegExp Pattern: \d+
  
  // Example 5: Constructor Function Returning Non-Primitive
  
  // Constructor function returning non-primitive
  function CustomObject(value) {
    this.value = value;
    return { value: 'Overridden Value' }; // Returns a new object, not this
  }
  
  // Creating an instance using new
  const customObj = new CustomObject('Original Value');
  console.log(customObj.value); // Output: Overridden Value
  
  // Example 6: Constructor Function Without new
  
  // Constructor function
  function PersonWithoutNew(name, age) {
    if (!(this instanceof PersonWithoutNew)) {
      return new PersonWithoutNew(name, age);
    }
    this.name = name;
    this.age = age;
    this.greet = function() {
      return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    };
  }
  
  // Creating an instance with or without new
  const person2 = PersonWithoutNew('Bob', 40); // Works without new
  console.log(person2.greet()); // Output: Hello, my name is Bob and I am 40 years old.
  