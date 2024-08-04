// A variable that could be considered "volatile" due to asynchronous changes
let volatileValue = 0;

function updateVolatileValue() {
  // Simulate a delay to represent an asynchronous operation
  setTimeout(() => {
    volatileValue++;
    console.log('Volatile value updated to:', volatileValue);
  }, Math.random() * 1000); // Random delay up to 1 second
}

function readVolatileValue() {
  // Read the current value of the volatile variable
  console.log('Current volatile value:', volatileValue);
}

// Simulate concurrent updates to the "volatile" variable
for (let i = 0; i < 5; i++) {
  updateVolatileValue();
}

// Read the value after some time to observe changes
setTimeout(readVolatileValue, 1500); // Read the value after 1.5 seconds
