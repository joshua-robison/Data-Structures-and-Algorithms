// Algorithms in JavaScript: Two Sum
function twoSum(array, sum) {
  var pairs = new Array();
  var ht = new Array();
  for (var i = 0; i < array.length; i++) {
    var a = array[i];
    var b = sum - a;
    if (ht.indexOf(b) !== -1) {
      var pair = new Array(a, b);
      pairs.push(pair);
    }
    ht.push(a);
  }
  return pairs;
}

// test function
var array = new Array(1, 6, 4, 5, 3, 3);
var sum = 7;
console.log(twoSum(array, sum));

var array = new Array(40, 11, 19, 17, -12);
var sum = 28;
console.log(twoSum(array, sum));
