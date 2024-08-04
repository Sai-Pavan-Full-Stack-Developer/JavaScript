class Person {
    // Private fields
    #name;
    #age;
  
    constructor(name, age) {
      this.#name = name;
      this.#age = age;
    }
  
    // Public method
    getInfo() {
      return `Name: ${this.#name}, Age: ${this.#age}`;
    }
  
    // Private method
    #getAge() {
      return this.#age;
    }
  
    // Public method to use private method
    revealAge() {
      return `The private age is ${this.#getAge()}`;
    }
  }
  
  const person = new Person('Alice', 30);
  
  console.log(person.getInfo()); // Output: Name: Alice, Age: 30
  console.log(person.revealAge()); // Output: The private age is 30
  
  // Trying to access private fields directly will result in an error
  // console.log(person.#name); // SyntaxError
  // console.log(person.#getAge()); // SyntaxError
  