// Algorithms in JavaScript: Max Stock Profit
function maxStockProfit(prices) {
  var maxProfit = -1;
  var buyPrice = 0;
  var sellPrice = 0;
  var priceChange = true;
  for (var i = 0; i < prices.length; i++) {
    if (priceChange) {
      buyPrice = prices[i];
    }
    sellPrice = prices[i + 1];
    if (sellPrice < buyPrice) {
      priceChange = true;
    } else {
      var tempProfit = sellPrice - buyPrice;
      if (tempProfit > maxProfit) {
        maxProfit = tempProfit;
      }
      priceChange = false;
    }
  }
  return maxProfit;
}

// test function
var prices = new Array(32, 46, 26, 38, 40, 48, 42);
console.log(maxStockProfit(prices));
