// Function to print even numbers from 1 to 10
function printEvenNumbers() {
    for (let i = 1; i <= 10; i++) {
        if (i % 2 !== 0) {
            // Skip odd numbers
            continue;
        }
        console.log(i); // This will only print even numbers
    }
}

// Call the function
printEvenNumbers(); // Output: 2 4 6 8 10