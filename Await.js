// Simulate a function that returns a Promise which resolves after a delay
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  // Async function to simulate a process with delays
  async function fetchData() {
    console.log('Fetching data...');
    
    // Use await to pause execution until the Promise is resolved
    await delay(2000);  // Waits for 2 seconds
    console.log('Data fetched after 2 seconds');
    
    // Simulate another asynchronous operation
    await delay(1000);  // Waits for 1 second
    console.log('Another operation completed after 1 more second');
    
    return 'Finished fetching data';
  }
  
  // Async function to handle the async operations
  async function handleData() {
    try {
      const result = await fetchData();
      console.log(result);  // Output the result from fetchData
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  // Call the async function
  handleData();
  