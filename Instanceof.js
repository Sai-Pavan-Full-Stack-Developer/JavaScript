// Define a constructor function
function Animal(name) {
    this.name = name;
  }
  
  // Define another constructor function
  function Dog(name, breed) {
    Animal.call(this, name); // Call the parent constructor
    this.breed = breed;
  }
  
  // Set up inheritance
  Dog.prototype = Object.create(Animal.prototype);
  Dog.prototype.constructor = Dog;
  
  // Define a class
  class Cat {
    constructor(name, color) {
      this.name = name;
      this.color = color;
    }
  }
  
  // Create instances
  const dog = new Dog('Rex', 'Labrador');
  const cat = new Cat('Whiskers', 'Black');
  
  // Use instanceof to check types
  console.log(dog instanceof Dog); // Output: true
  console.log(dog instanceof Animal); // Output: true
  console.log(dog instanceof Cat); // Output: false
  
  console.log(cat instanceof Cat); // Output: true
  console.log(cat instanceof Animal); // Output: false
  
  // Check with Object.prototype
  console.log(dog instanceof Object); // Output: true
  console.log(cat instanceof Object); // Output: true
  
  // Check with a non-existing type
  console.log(dog instanceof Array); // Output: false
  console.log(cat instanceof Array); // Output: false
  