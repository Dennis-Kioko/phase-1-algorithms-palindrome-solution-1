function reverse(word) {
  // const WordArray = word.split("")
  // const reversedWordArray = WordArray.reverse()
  // const reversedWord = reversedWordArray.join()
  // return reversedWord;
  return word.split("").reverse().join("");
}

function isPalindrome(word) {
  // Write your algorithm here
  // reverse the input string
  const reversedWord = reverse(word);

  //if the input is the same as reversed input
  return word === reversedWord;
}
/* 
  Add your pseudocode here
*/
/*if the input is the same as reversed input
    return true
else
    return false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
