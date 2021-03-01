// Algorithms in JavaScript: Sieve of Eratosthenes
function sieveEratosthenes(n) {
  var primes = new Array();
  for (var i = 0; i <= n; i++) {
    primes[i] = true;
  }
  primes[0] = false;
  primes[1] = false;
  for (var i = 2; i <= Math.sqrt(n); i++) {
    for (var j = 2; j * i <= n; j++) {
      primes[i * j] = false;
    }
  }
  var result = new Array();
  for (var i = 0; i < primes.length; i++) {
    if (primes[i]) {
      result.push(i);
    }
  }
  return result;
}

// test function
var n = 30;
console.log(sieveEratosthenes(n));
