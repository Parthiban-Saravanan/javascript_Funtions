// Anonymous Function
const removeDuplicates = function(arr) {
    return arr.filter(function(value, index, self) {
      return self.indexOf(value) === index;
    });
  };
  
  console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
  // Output: [ 1, 2, 3, 4, 5 ]
  
  // IIFE
  const uniqueArray = (function(arr) {
    return arr.filter(function(value, index, self) {
      return self.indexOf(value) === index;
    });
  })([1, 2, 2, 3, 4, 4, 5]);
  
  console.log(uniqueArray);
  // Output: [ 1, 2, 3, 4, 5 ]
  