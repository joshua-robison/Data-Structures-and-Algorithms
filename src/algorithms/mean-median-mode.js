// Algorithms in JavaScript: Mean Median Mode
function meanMedianMode(array) {
  return {
    mean: mean(array),
    median: median(array),
    mode: mode(array)
  };
}

// compute the average
function mean(array) {
  var mean;
  if (array.length === 0) {
    return mean;
  }
  var sum = 0;
  array.forEach(value => {
    sum += value;
  });
  mean = sum / array.length;
  return mean;
}

// compute the median
function median(array) {
  array.sort(function(a, b) {
    return a - b;
  });
  var median;
  if (array.length === 0) {
    return median;
  }
  if (array.length % 2 === 0) {
    var a = array[(array.length / 2) - 1];
    var b = array[(array.length / 2)];
    median = (a + b) / 2;
  } else {
    median = array[Math.floor(array.length / 2)];
  }
  return median;
}

// compute the mode
function mode(array) {
  var ht = {};
  array.forEach(value => {
    if (!ht[value]) {
      ht[value] = 0;
    }
    ht[value]++;
  });
  var maxCount = 0;
  var modes = new Array();
  for (var num in ht) {
    if (ht[num] > maxCount) {
      modes = [num];
      maxCount = ht[num];
    } else if (ht[num] === maxCount) {
      modes.push(num);
    }
  }
  if (modes.length === Object.keys(ht).length) {
    modes = new Array();
  }
  return modes;
}

// test functions
var array = new Array(1, 2, 3, 4, 5, 5, 6, 7);
console.log(meanMedianMode(array));

var array = new Array();
console.log(meanMedianMode(array));
