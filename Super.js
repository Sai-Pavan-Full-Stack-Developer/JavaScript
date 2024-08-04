// Parent class
class Animal {
    constructor(name) {
      this.name = name;
    }
  
    // Method in the parent class
    speak() {
      console.log(`${this.name} makes a noise.`);
    }
  }
  
  // Subclass extending the parent class
  class Dog extends Animal {
    constructor(name, breed) {
      // Call the parent class constructor
      super(name);
      this.breed = breed;
    }
  
    // Overriding the speak method
    speak() {
      // Call the parent class method
      super.speak();
      console.log(`${this.name} barks.`);
    }
  
    // Method specific to Dog class
    fetch() {
      console.log(`${this.name} is fetching.`);
    }
  }
  
  // Create an instance of Dog
  const myDog = new Dog('Rex', 'German Shepherd');
  
  // Using methods from both the parent class and the subclass
  myDog.speak();
  // Output:
  // Rex makes a noise.
  // Rex barks.
  
  myDog.fetch();
  // Output:
  // Rex is fetching.
  
  // Accessing properties
  console.log(myDog.name);  // Output: Rex
  console.log(myDog.breed); // Output: German Shepherd
  