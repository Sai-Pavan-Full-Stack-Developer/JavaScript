// Example 1: Using Classes and Inheritance

// Define a base class (abstract class)
class Animal {
    constructor(name) {
      this.name = name;
    }
  
    // Abstract method (must be implemented by subclasses)
    speak() {
      throw new Error('Method "speak()" must be implemented.');
    }
  }
  
  // Define a subclass that "implements" the abstract method
  class Dog extends Animal {
    speak() {
      console.log(`${this.name} says Woof!`);
    }
  }
  
  class Cat extends Animal {
    speak() {
      console.log(`${this.name} says Meow!`);
    }
  }
  
  const dog = new Dog('Buddy');
  const cat = new Cat('Whiskers');
  
  dog.speak(); // Output: Buddy says Woof!
  cat.speak(); // Output: Whiskers says Meow!
  
  // Example 2: Using Factory Functions
  
  function createAnimal(type, name) {
    const animal = {
      name,
      speak() {
        if (type === 'dog') {
          console.log(`${this.name} says Woof!`);
        } else if (type === 'cat') {
          console.log(`${this.name} says Meow!`);
        } else {
          console.log('Unknown animal type.');
        }
      }
    };
  
    return animal;
  }
  
  const dogFactory = createAnimal('dog', 'Rex');
  const catFactory = createAnimal('cat', 'Mittens');
  
  dogFactory.speak(); // Output: Rex says Woof!
  catFactory.speak(); // Output: Mittens says Meow!
  
  // Example 3: Using ES6 Symbols for Unique Method Names
  
  const speakSymbol = Symbol('speak');
  
  class Bird {
    constructor(name) {
      this.name = name;
    }
  
    [speakSymbol]() {
      console.log(`${this.name} sings!`);
    }
  }
  
  const parrot = new Bird('Polly');
  parrot[speakSymbol](); // Output: Polly sings!
  
  // Example 4: Using Mixins for Multiple Inheritance
  
  const Flying = {
    fly() {
      console.log(`${this.name} is flying.`);
    }
  };
  
  const Swimming = {
    swim() {
      console.log(`${this.name} is swimming.`);
    }
  };
  
  class Duck {
    constructor(name) {
      this.name = name;
    }
  }
  
  Object.assign(Duck.prototype, Flying, Swimming);
  
  const duck = new Duck('Donald');
  duck.fly();  // Output: Donald is flying.
  duck.swim(); // Output: Donald is swimming.
  