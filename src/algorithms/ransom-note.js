// Algorithms in JavaScript: Harmless Ransom Note
function ransomNote(noteText, sourceText) {
  var noteArray = noteText.split(" ");
  var sourceArray = sourceText.split(" ");
  var source = {};
  sourceArray.forEach(word => {
    if (!source[word]) {
      source[word] = 0;
    }
    source[word]++;
  });
  noteArray.forEach(word => {
    if (source[word]) {
      source[word]--;
    } else {
      return false;
    }
  });
  return true;
}

// test function
noteText = "this is all";
sourceText = "this is all the magazine text";
ransomNote(noteText, sourceText);
