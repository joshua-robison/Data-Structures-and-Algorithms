// Algorithms in JavaScript: Bubble Sort
function bubbleSort(array) {
  for (var i = array.length; i > 0; i--) {
    for (var j = 0; j < i; j++) {
      if (array[j] > array[j + 1]) {
        var temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}

// test function
var array = new Array(5, 3, 8, 2, 1, 4);
console.log(bubbleSort(array));
