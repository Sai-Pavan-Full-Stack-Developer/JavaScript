// Define a base class that acts as an interface
class Shape {
    // Constructor should be implemented in subclasses
    constructor() {
      if (new.target === Shape) {
        throw new Error("Cannot instantiate an abstract class.");
      }
    }
  
    // Abstract method (to be implemented by subclasses)
    getArea() {
      throw new Error("Method 'getArea()' must be implemented.");
    }
  
    // Abstract method (to be implemented by subclasses)
    getPerimeter() {
      throw new Error("Method 'getPerimeter()' must be implemented.");
    }
  }
  
  // Implementing the interface with a subclass
  class Rectangle extends Shape {
    constructor(width, height) {
      super();
      this.width = width;
      this.height = height;
    }
  
    getArea() {
      return this.width * this.height;
    }
  
    getPerimeter() {
      return 2 * (this.width + this.height);
    }
  }
  
  // Implementing the interface with another subclass
  class Circle extends Shape {
    constructor(radius) {
      super();
      this.radius = radius;
    }
  
    getArea() {
      return Math.PI * this.radius * this.radius;
    }
  
    getPerimeter() {
      return 2 * Math.PI * this.radius;
    }
  }
  
  // Using the classes
  const rectangle = new Rectangle(10, 5);
  console.log(`Rectangle Area: ${rectangle.getArea()}`); // Output: Rectangle Area: 50
  console.log(`Rectangle Perimeter: ${rectangle.getPerimeter()}`); // Output: Rectangle Perimeter: 30
  
  const circle = new Circle(7);
  console.log(`Circle Area: ${circle.getArea()}`); // Output: Circle Area: 153.93804002589985
  console.log(`Circle Perimeter: ${circle.getPerimeter()}`); // Output: Circle Perimeter: 43.982297150257104
  