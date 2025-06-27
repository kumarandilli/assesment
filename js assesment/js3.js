function findLongestWord(sentence) {

  const words = sentence.split(" ");

  
  let longestWord = "";
  
  for (let word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }

  return longestWord;
}



const result = findLongestWord("JavaScript is powerful");
console.log(result); 
