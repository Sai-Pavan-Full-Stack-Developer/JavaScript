// Immutable Variables
const pi = 3.14159;
console.log(`The value of pi is: ${pi}`); // Output: The value of pi is: 3.14159

// Attempting to reassign the variable (will throw an error if uncommented)
// pi = 3.14; // Uncommenting this line will throw a TypeError

// Immutable Objects
const car = {
  make: 'Toyota',
  model: 'Camry'
};

// Freeze the object: prevents changes to existing properties and prevents adding/removing properties
Object.freeze(car);

// Attempting to modify the object
car.model = 'Corolla'; // This change will be ignored
car.year = 2024; // Adding a new property will be ignored

console.log(car); // Output: { make: 'Toyota', model: 'Camry' }

// Preventing Class Extension
// Using conventions to suggest that a class should not be extended
class BaseClass {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return `Hello, ${this.name}!`;
  }
}

// Attempt to extend BaseClass (allowed but discouraged by convention)
class DerivedClass extends BaseClass {
  constructor(name, extra) {
    super(name);
    this.extra = extra;
  }

  greet() {
    return `${super.greet()} Extra info: ${this.extra}`;
  }
}

const baseInstance = new BaseClass('Alice');
console.log(baseInstance.greet()); // Output: Hello, Alice!

const derivedInstance = new DerivedClass('Bob', 'extra');
console.log(derivedInstance.greet()); // Output: Hello, Bob! Extra info: extra

// Using a function to simulate a 'final' class pattern
function createBaseClass(name) {
  return {
    name,
    greet() {
      return `Hello, ${this.name}!`;
    }
  };
}

const baseObject = createBaseClass('Charlie');
console.log(baseObject.greet()); // Output: Hello, Charlie!

// Trying to 'extend' the final-like object pattern
function createDerivedClass(name, extra) {
  const base = createBaseClass(name);
  return {
    ...base,
    extra,
    greet() {
      return `${base.greet()} Extra info: ${this.extra}`;
    }
  };
}

const derivedObject = createDerivedClass('David', 'extra');
console.log(derivedObject.greet()); // Output: Hello, David! Extra info: extra
