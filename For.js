// Basic for loop: Counting from 0 to 4
console.log('Basic for loop:');
for (let i = 0; i < 5; i++) {
  console.log(i);
}
// Output:
// 0
// 1
// 2
// 3
// 4

// Iterating over an array
console.log('\nIterating over an array:');
const fruits = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
// Output:
// Apple
// Banana
// Cherry
// Date
// Elderberry

// Nested for loop: Multiplication table
console.log('\nMultiplication table:');
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= 5; j++) {
    process.stdout.write(`${i * j}\t`); // Print the result followed by a tab
  }
  console.log(); // New line after each row
}
// Output:
// 1	2	3	4	5	
// 2	4	6	8	10	
// 3	6	9	12	15	
// 4	8	12	16	20	
// 5	10	15	20	25	

// Using for loop to iterate over a string
console.log('\nIterating over a string:');
const text = 'JavaScript';
for (let i = 0; i < text.length; i++) {
  console.log(text[i]);
}
// Output:
// J
// a
// v
// a
// S
// c
// r
// i
// p
// t

// Infinite for loop (be careful with this)
console.log('\nInfinite for loop example (will stop manually):');
let count = 0;
for (;;) {
  if (count >= 3) break; // Exit the loop when count reaches 3
  console.log('Infinite loop iteration:', count);
  count++;
}
// Output:
// Infinite loop iteration: 0
// Infinite loop iteration: 1
// Infinite loop iteration: 2
