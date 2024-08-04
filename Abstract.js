// Define an abstract class (using ES6 syntax)
class Animal {
    constructor(name) {
      if (new.target === Animal) {
        throw new TypeError("Cannot construct Abstract instances directly");
      }
      this.name = name;
    }
  
    // Abstract method (must be implemented by subclasses)
    makeSound() {
      throw new Error("Method 'makeSound()' must be implemented.");
    }
  }
  
  // Define a subclass
  class Dog extends Animal {
    constructor(name, breed) {
      super(name); // Call the parent constructor
      this.breed = breed;
    }
  
    // Implement the abstract method
    makeSound() {
      console.log(`${this.name} says Woof!`);
    }
  
    // Additional method
    fetch() {
      console.log(`${this.name} is fetching the ball.`);
    }
  }
  
  // Define another subclass
  class Cat extends Animal {
    constructor(name, color) {
      super(name); // Call the parent constructor
      this.color = color;
    }
  
    // Implement the abstract method
    makeSound() {
      console.log(`${this.name} says Meow!`);
    }
  
    // Additional method
    purr() {
      console.log(`${this.name} is purring.`);
    }
  }
  
  // Instantiate the subclasses
  const myDog = new Dog("Buddy", "Golden Retriever");
  const myCat = new Cat("Whiskers", "Tabby");
  
  // Demonstrate polymorphism
  function makeAnimalSound(animal) {
    animal.makeSound();
  }
  
  // Call the polymorphic function
  makeAnimalSound(myDog); // Output: Buddy says Woof!
  makeAnimalSound(myCat); // Output: Whiskers says Meow!
  