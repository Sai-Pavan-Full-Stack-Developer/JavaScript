// Function to get the character at a specific index in a string
function getCharacterAtIndex(str, index) {
    if (index < 0 || index >= str.length) {
      console.log('Index out of bounds');
      return;
    }
    console.log(`Character at index ${index}: ${str[index]}`);
  }
  
  // Function to find the first occurrence of a character in a string
  function findCharacterPosition(str, char) {
    const position = str.indexOf(char);
    if (position === -1) {
      console.log(`Character '${char}' not found`);
    } else {
      console.log(`Character '${char}' found at position ${position}`);
    }
  }
  
  // Function to convert a string into an array of characters
  function stringToCharArray(str) {
    const charArray = Array.from(str);
    console.log('Character array:', charArray);
    return charArray;
  }
  
  // Function to demonstrate character operations
  function charOperations() {
    const myString = 'Hello, World!';
  
    // Get character at specific index
    getCharacterAtIndex(myString, 7); // Output: Character at index 7: W
  
    // Find the position of a character
    findCharacterPosition(myString, 'o'); // Output: Character 'o' found at position 4
    findCharacterPosition(myString, 'z'); // Output: Character 'z' not found
  
    // Convert string to character array
    const charArray = stringToCharArray(myString);
    console.log('Character array length:', charArray.length); // Output: Character array length: 13
  }
  
  // Execute the character operations function
  charOperations();
  