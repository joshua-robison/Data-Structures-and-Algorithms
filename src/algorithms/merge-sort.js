// Algorithms in JavaScript: Merge Sort
function mergeSort(array) {
  if (array.length < 2) {
    return array;
  }
  var mid = Math.floor(array.length / 2);
  var left = array.slice(0, mid);
  var right = array.slice(mid, array.length);
  return merge(mergeSort(left), mergeSort(right));
}

// merge function
function merge(array1, array2) {
  var result = new Array();
  while (array1.length && array2.length) {
    var min;
    if (array1[0] < array2[0]) {
      min = array1.shift();
    } else {
      min = array2.shift();
    }
    result.push(min);
  }
  if (array1.length) {
    result = result.concat(array1);
  } else {
    result = result.concat(array2);
  }
  return result;
}

// test function
var array = new Array(5, 3, 8, 2, 1, 4);
console.log(mergeSort(array));
