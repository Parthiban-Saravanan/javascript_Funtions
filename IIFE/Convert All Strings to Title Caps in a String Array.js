// Anonymous Function
const titleCaps = function(strArray) {
    return strArray.map(function(str) {
      return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    });
  };
  
  console.log(titleCaps(["hello", "world"]));
  // Output: [ 'Hello', 'World' ]
  
  // IIFE
  const titleCapsResult = (function(strArray) {
    return strArray.map(function(str) {
      return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    });
  })(["hello", "world"]);
  
  console.log(titleCapsResult);
  // Output: [ 'Hello', 'World' ]
  