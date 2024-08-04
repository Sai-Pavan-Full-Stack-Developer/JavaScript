// Function simulating an asynchronous operation
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  // Async function demonstrating synchronization of async tasks
  async function performTasks() {
    console.log('Task 1 started');
    await delay(2000); // Wait for 2 seconds
    console.log('Task 1 completed');
    
    console.log('Task 2 started');
    await delay(1000); // Wait for 1 second
    console.log('Task 2 completed');
    
    console.log('All tasks completed');
  }
  
  // Call the async function
  performTasks();
  