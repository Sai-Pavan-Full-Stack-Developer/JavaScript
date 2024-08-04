function varScopeExample() {
    console.log('Before declaration:', myVar); // Output: undefined (due to hoisting)
  
    var myVar = 'Hello, world!';
    
    console.log('After declaration:', myVar); // Output: Hello, world!
  
    if (true) {
      var myVar = 'Hello again!';
      console.log('Inside block:', myVar); // Output: Hello again!
    }
  
    console.log('Outside block:', myVar); // Output: Hello again! (Function scope)
  }
  
  varScopeExample();
  
  // Global scope example
  var globalVar = 'I am global';
  console.log('Global scope:', globalVar); // Output: I am global
  
  function redefineVar() {
    var globalVar = 'I am local';
    console.log('Local scope:', globalVar); // Output: I am local
  }
  
  redefineVar();
  console.log('Global scope after local redefine:', globalVar); // Output: I am global
  