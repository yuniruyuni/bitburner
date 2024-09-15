// Algorithmic Stock Trader I
// ---------------------------------
// You are given the following array of stock prices (which are numbers)
// where the i-th element represents the stock price on day i:
// 
//  26,84,56,107,48,69,23,14,127,79,68,178,41,112,28,94,188,193,26,175,77,146,121,100,143,174
// 
// Determine the maximum possible profit you can earn using at most one transaction
// (i.e. you can only buy and sell the stock once).
// If no profit can be made then the answer should be 0.
// Note that you have to buy the stock before you can sell it.
export function algorithmic_stock_trader_i(prices) {
  if( prices.length < 2 ) return 0;

  let minPrice = prices[0];
  let maxProfit = 0;

  for( let i = 1; i < prices.length; ++i ) {
    const profit = prices[i] - minPrice;
    maxProfit = Math.max(maxProfit, profit);
    minPrice = Math.min(minPrice, prices[i]);
  }

  return maxProfit;
}
