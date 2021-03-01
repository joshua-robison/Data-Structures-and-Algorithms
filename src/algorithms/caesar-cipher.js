// Algorithms in JavaScript: Caesar Cipher
function caesarCipher(string, shift) {
  lowerString = string.toLowerCase();
  var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  shift = shift % alphabet.length;
  var newString = "";
  for (var i = 0; i < lowerString.length; i++) {
    var letter = lowerString[i];
    if (letter === " ") {
      newString += letter;
      continue;
    }
    var index = alphabet.indexOf(letter);
    var newIndex = index + shift;
    if (newIndex > 25) {
      newIndex = newIndex - alphabet.length;
    }
    if (newIndex < 0) {
      newIndex = alphabet.length + newIndex;
    }
    if (string[i] === string[i].toUpperCase()) {
      newString += alphabet[newIndex].toUpperCase();
    } else {
      newString += alphabet[newIndex];
    }
  }
  return newString;
}

// test function
var string = "JavaScript";
var shift = -7;
console.log(caesarCipher(string, shift));
