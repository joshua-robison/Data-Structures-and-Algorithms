// Algorithms in JavaScript: Fibonacci with Memoization
function fibonacci(n, cache = new Array()) {
  if (cache[n]) {
    return cache[n];
  } else {
    if (n === 1 || n === 2) {
      return 1;
    } else {
      cache[n] = fibonacci(n - 1, cache) + fibonacci(n - 2, cache);
    }
  }
  return cache[n];
}

// test function
var fib = {};
var n = 10;
for (var i = 1; i <= n; i++) {
  fib[i] = fibonacci(i);
}
console.log(fib);
