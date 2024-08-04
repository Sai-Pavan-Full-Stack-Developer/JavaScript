function processTemporaryData() {
    // Create a transient object
    let tempData = {
      id: 1,
      name: 'Temporary Data',
      timestamp: new Date()
    };
  
    // Process the transient data
    console.log('Processing:', tempData);
  
    // Simulate processing by transforming the data
    tempData.processed = true;
  
    // Output the processed data
    console.log('Processed Data:', tempData);
  
    // Once processing is done, we do not need this data anymore
    // In JavaScript, this can be simply left for garbage collection
  }
  
  // Example usage
  processTemporaryData();
  