// Algorithms in JavaScript: Reverse Words
function reverseWords(words) {
  words = words.split(" ");
  var newWords = new Array();
  words.forEach(word => {
    var reversedWord = "";
    for (var i = word.length - 1; i >= 0; i--) {
      reversedWord += word[i];
    }
    newWords.push(reversedWord);
  });
  return newWords.join(" ");
}

// test function
var words = "coding JavaScript";
console.log(reverseWords(words));
