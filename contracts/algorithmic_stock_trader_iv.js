
// Algorithmic Stock Trader IV
// ---------------------------------
// You are given the following array with two elements:
// 
// [7, [115,78,121,11,154,161,93,72,191,150,148,75,196,11,139,29,74,51,33,112,90,22,172,71,195,78,138,55,75,55,44,171,135,96]]
// 
// The first element is an integer k.
// The second element is an array of stock prices (which are numbers)
// where the i-th element represents the stock price on day i.
// 
// Determine the maximum possible profit you can earn using at most k transactions.
// A transaction is defined as buying and then selling one share of the stock.
// Note that you cannot engage in multiple transactions at once.
// In other words, you must sell the stock before you can buy it again.
// 
// If no profit can be made, then the answer should be 0.
export function algorithmic_stock_trader_iv([k, prices]) {
  const n = prices.length;
  if( n === 0 || k === 0 ) {
    return 0;
  }

  if ( Math.floor(n / 2) <= k ) {
    let profit = 0;
    for( let i = 1; i < prices.length; ++i ) {
      profit += Math.max(prices[i] - prices[i - 1], 0);
    }
    return profit;
  }


  const dp =  Array(n).fill(0).
    map(() => Array(k+1).fill(0));

  for( let j = 1; j <= k; ++j ) {
    let maxProfit = -prices[0];

    for( let i = 1; i < n; ++i ) {
      dp[i][j] = Math.max(dp[i-1][j], prices[i] + maxProfit);
      maxProfit = Math.max(maxProfit, dp[i][j-1] - prices[i]);
    }
  }

  return dp[n-1][k];
}
