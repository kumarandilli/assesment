function mostRepeatedChar(str) {
  
  const charCount = {};
  for (let char of str) {
    if (charCount[char]) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }
  }

  
  let maxChar = '';
  let maxCount = 0;

  
  for (let char in charCount) {
    if (charCount[char] > maxCount) {
      maxCount = charCount[char];
      maxChar = char;
    }
  }

  return maxChar;
}

console.log(mostRepeatedChar("aabbbcc")); 
