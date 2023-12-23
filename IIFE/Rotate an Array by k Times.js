// Anonymous Function
const rotateArray = function(arr, k) {
    k = k % arr.length; // Handle rotations larger than array length
    return arr.slice(k).concat(arr.slice(0, k));
  };
  
  console.log(rotateArray([1, 2, 3, 4, 5], 2));
  // Output: [ 3, 4, 5, 1, 2 ]
  
  // IIFE
  const rotatedArray = (function(arr, k) {
    k = k % arr.length;
    return arr.slice(k).concat(arr.slice(0, k));
  })([1, 2, 3, 4, 5], 2);
  
  console.log(rotatedArray);
  // Output: [ 3, 4, 5, 1, 2 ]
  