// Anonymous Function
const sumArray = function(arr) {
    return arr.reduce(function(acc, num) {
      return acc + num;
    }, 0);
  };
  
  console.log(sumArray([1, 2, 3, 4, 5]));
  // Output: 15
  
  // IIFE
  const sumResult = (function(arr) {
    return arr.reduce(function(acc, num) {
      return acc + num;
    }, 0);
  })([1, 2, 3, 4, 5]);
  
  console.log(sumResult);
  // Output: 15
  