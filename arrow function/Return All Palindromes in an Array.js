const getPalindromes = arr => {
    return arr.filter(str => {
      const reversed = str.split("").reverse().join("");
      return str === reversed;
    });
  };
  
  console.log(getPalindromes(["level", "hello", "madam"]));
  // Output: [ 'level', 'madam' ]
  