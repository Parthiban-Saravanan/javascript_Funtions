const getPrimeNumbers = arr => {
    return arr.filter(num => {
      for (let i = 2; i < num; i++)
        if (num % i === 0) return false;
      return num > 1;
    });
  };
  
  console.log(getPrimeNumbers([2, 3, 4, 5, 6, 7, 8, 9, 10]));
  // Output: [ 2, 3, 5, 7 ]
  