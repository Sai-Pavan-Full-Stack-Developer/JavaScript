// Create an ArrayBuffer with a size of 4 bytes
const buffer = new ArrayBuffer(4); // 4 bytes (32 bits)
const view = new Uint8Array(buffer); // View to manipulate buffer as bytes

// Initialize the buffer with byte values
view[0] = 255; // 0xFF
view[1] = 128; // 0x80
view[2] = 64;  // 0x40
view[3] = 0;   // 0x00

// Function to print bytes in hexadecimal format
function printBytes(byteArray) {
  const hexString = Array.from(byteArray)
    .map(byte => byte.toString(16).padStart(2, '0'))
    .join(' ');
  console.log(`Byte values: ${hexString}`);
}

// Print the byte values
printBytes(view); // Output: Byte values: ff 80 40 00

// Function to modify bytes and show the result
function modifyBytes() {
  // Modify some bytes
  view[0] = 1;
  view[1] = 2;
  view[2] = 3;
  view[3] = 4;

  console.log('After modification:');
  printBytes(view); // Output: Byte values: 01 02 03 04
}

// Modify and print the buffer
modifyBytes();
