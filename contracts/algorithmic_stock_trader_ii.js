
// Algorithmic Stock Trader II
// ---------------------------------
// You are given the following array of stock prices (which are numbers) where
// the i-th element represents the stock price on day i:
// 
// 54,183,52,32,88,109,130,51,133,98,80,75,35,183,52,194,35,98,148,48,100,85,127,139,64,179,170,24,67,79,72,45,50,84,6,179,165,66,72,199,33,48,159,67,160,59,21
// 
// Determine the maximum possible profit you can earn using as many transactions as you'd like.
// A transaction is defined as buying and then selling one share of the stock.
// Note that you cannot engage in multiple transactions at once. In other words,
// you must sell the stock before you buy it again.
// 
// If no profit can be made, then the answer should be 0.
export function algorithmic_stock_trader_ii(prices) {
  let profit = 0;

  for( let i = 1; i < prices.length; ++i ) {
    profit += Math.max(prices[i] - prices[i - 1], 0);
  }
  
  return profit;
}
