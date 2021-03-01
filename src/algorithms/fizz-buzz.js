// Algorithms in JavaScript: Fizz Buzz
function fizzBuzz(n) {
  for (var i = 1; i <= n; i++) {
    var output = "";
    if (i % 3 === 0) {
      output += "Fizz";
    }
    if (i % 5 === 0) {
      output += "Buzz";
    }
    if (output.length === 0) {
      output += i;
    }
    console.log(output);
  }
}

// test function
fizzBuzz(30);
