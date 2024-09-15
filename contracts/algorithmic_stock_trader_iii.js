// Algorithmic Stock Trader III
// ---------------------------------
// You are given the following array of stock prices (which are numbers) where
// the i-th element represents the stock price on day i:
// 
// 59,121,70,197,136,165,35,169,23,175,16,120,158,112,42,114,187,16,165,54,122,124,33
// 
// Determine the maximum possible profit you can earn using at most two transactions.
// A transaction is defined as buying and then selling one share of the stock.
// Note that you cannot engage in multiple transactions at once.
// In other words, you must sell the stock before you buy it again.
// 
// If no profit can be made, then the answer should be 0.
export function algorithmic_stock_trader_iii(prices) {
  const n = prices.length;
  if( n < 2 ) return 0;

  const leftMax = Array(n).fill(0);
  const rightMax = Array(n).fill(0);


  let minPrice = prices[0];
  for( let i = 1 ; i < n; ++i ) {
    minPrice = Math.min(minPrice, prices[i]);
    leftMax[i] = Math.max(leftMax[i - 1], prices[i] - minPrice);
  }

  let maxPrice = prices[n-1];
  for( let i = n-2; 0 <= i; --i ) {
    maxPrice = Math.max(maxPrice, prices[i]);
    rightMax[i] = Math.max(rightMax[i + 1], maxPrice - prices[i]);
  } 

  let maxProfit = 0;
  for( let i = 0; i < n; ++i ) {
    maxProfit = Math.max(maxProfit, leftMax[i] + rightMax[i]);
  }

  return maxProfit;
}
