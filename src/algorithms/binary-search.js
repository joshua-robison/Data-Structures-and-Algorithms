// Algorithms in JavaScript: Binary Search
function binarySearch(array, value) {
  var mid = Math.floor(array.length / 2);
  var middle = array[mid];
  if (middle === value) {
    return true;
  } else if (middle < value && array.length > 1) {
    return binarySearch(array.splice(mid, array.length), value);
  } else if (middle > value && array.length > 1) {
    return binarySearch(array.splice(0, mid), value);
  } else {
    return false;
  }
}

// test function
var array = new Array(5, 7, 12, 16, 36, 39, 42, 56, 71);
var value = 56;
console.log(binarySearch(array, value));
