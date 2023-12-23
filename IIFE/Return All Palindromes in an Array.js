// Anonymous Function
const getPalindromes = function(arr) {
    return arr.filter(function(str) {
      const reversed = str.split("").reverse().join("");
      return str === reversed;
    });
  };
  
  console.log(getPalindromes(["level", "hello", "madam"]));
  // Output: [ 'level', 'madam' ]
  
  // IIFE
  const palindromeResult = (function(arr) {
    return arr.filter(function(str) {
      const reversed = str.split("").reverse().join("");
      return str === reversed;
    });
  })(["level", "hello", "madam"]);
  
  console.log(palindromeResult);
  // Output: [ 'level', 'madam' ]
  