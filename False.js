// Boolean values
const isFalse = false;
const isTrue = true;

console.log(`isFalse: ${isFalse}`); // Output: isFalse: false
console.log(`isTrue: ${isTrue}`);   // Output: isTrue: true

// Conditional statements with false
if (isFalse) {
  console.log('This will not print because isFalse is false.');
} else {
  console.log('This will print because isFalse is false.'); // Output: This will print because isFalse is false.
}

// Logical operations with false
const result1 = isFalse && isTrue;
console.log(`isFalse && isTrue: ${result1}`); // Output: isFalse && isTrue: false

const result2 = isFalse || isTrue;
console.log(`isFalse || isTrue: ${result2}`); // Output: isFalse || isTrue: true

const result3 = !isFalse;
console.log(`!isFalse: ${result3}`); // Output: !isFalse: true

// Function that returns false
function checkValue(value) {
  if (value) {
    return true;
  } else {
    return false;
  }
}

console.log(checkValue(0));  // Output: false (0 is falsy)
console.log(checkValue(1));  // Output: true  (1 is truthy)
console.log(checkValue('')); // Output: false (empty string is falsy)
console.log(checkValue('Hello')); // Output: true (non-empty string is truthy)

// Usage in a loop
let count = 0;
while (false) {
  count++;
  // This block will never execute because the condition is false
}

console.log(`Count after loop: ${count}`); // Output: Count after loop: 0
