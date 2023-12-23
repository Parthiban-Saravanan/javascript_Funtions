// Anonymous Function
const printOddNumbers = function(arr) {
    arr.forEach(function(num) {
      if (num % 2 !== 0) {
        console.log(num);
      }
    });
  };
  
  printOddNumbers([1, 2, 3, 4, 5]);
  // Output: 1
  //         3
  //         5
  
  // IIFE
  (function(arr) {
    arr.forEach(function(num) {
      if (num % 2 !== 0) {
        console.log(num);
      }
    });
  })([1, 2, 3, 4, 5]);
  // Output: 1
  //         3
  //         5
  