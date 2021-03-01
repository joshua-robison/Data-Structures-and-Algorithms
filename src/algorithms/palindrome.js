// Algorithms in JavaScript: Palindrome
function palindrome(phrase) {
  phrase = phrase.toLowerCase();
  var characters = phrase.split("");
  var valid = "abcdefghijklmnopqrstuvwxyz".split("");
  var letters = new Array();
  characters.forEach(char => {
    if (valid.indexOf(char) > -1) {
      letters.push(char);
    }
  });
  if (letters.join("") === letters.reverse().join("")) {
    return true;
  }
  return false;
}

// test function
var phrase = "Madam I'm Adam";
console.log(palindrome(phrase));
