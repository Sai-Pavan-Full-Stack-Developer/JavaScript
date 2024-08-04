// Define a class named Person
class Person {
    // Constructor to initialize properties
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    // Method to greet
    greet() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
  
    // Method to celebrate birthday
    celebrateBirthday() {
      this.age++;
      console.log(`Happy Birthday, ${this.name}! You are now ${this.age} years old.`);
    }
  
    // Static method to create a person from an object
    static createPersonFromObject(obj) {
      return new Person(obj.name, obj.age);
    }
  }
  
  // Create an instance of Person
  const person1 = new Person('Alice', 30);
  person1.greet(); // Output: Hello, my name is Alice and I am 30 years old.
  person1.celebrateBirthday(); // Output: Happy Birthday, Alice! You are now 31 years old.
  
  // Create a new Person instance using the static method
  const personData = { name: 'Bob', age: 25 };
  const person2 = Person.createPersonFromObject(personData);
  person2.greet(); // Output: Hello, my name is Bob and I am 25 years old.
  