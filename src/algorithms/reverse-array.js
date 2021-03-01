// Algorithms in JavaScript: Reverse Array in Place
function reverseArray(array) {
  for (var i = 0; i < array.length / 2; i++) {
    var temp = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = temp;
  }
  return array;
}

// test function
var array = new Array(1, 2, 3, 4, 5);
console.log(reverseArray(array));
