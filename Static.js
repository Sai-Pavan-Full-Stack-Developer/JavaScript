class MathUtils {
    // Static property
    static pi = 3.14159;
  
    // Static method
    static add(x, y) {
      return x + y;
    }
  
    // Static method using static property
    static circleArea(radius) {
      return MathUtils.pi * radius * radius;
    }
  
    // Instance method
    multiply(x, y) {
      return x * y;
    }
  }
  
  // Using static methods and properties
  console.log(MathUtils.pi); // Output: 3.14159
  console.log(MathUtils.add(5, 3)); // Output: 8
  console.log(MathUtils.circleArea(10)); // Output: 314.159
  
  // Using instance method
  const math = new MathUtils();
  console.log(math.multiply(4, 5)); // Output: 20
  
  // Trying to call static methods on an instance will result in an error
  // console.log(math.add(5, 3)); // Error: math.add is not a function
  