// Anonymous Function
const getMedian = function(arr1, arr2) {
    const mergedArray = arr1.concat(arr2).sort((a, b) => a - b);
    const mid = Math.floor(mergedArray.length / 2);
    return mergedArray.length % 2 === 0
      ? (mergedArray[mid - 1] + mergedArray[mid]) / 2
      : mergedArray[mid];
  };
  
  console.log(getMedian([1, 2, 3], [4, 5, 6]));
  // Output: 3.5
  
  // IIFE
  const medianResult = (function(arr1, arr2) {
    const mergedArray = arr1.concat(arr2).sort((a, b) => a - b);
    const mid = Math.floor(mergedArray.length / 2);
    return mergedArray.length % 2 === 0
      ? (mergedArray[mid - 1] + mergedArray[mid]) / 2
      : mergedArray[mid];
  })([1, 2, 3], [4, 5, 6]);
  
  console.log(medianResult);
  // Output: 3.5
  