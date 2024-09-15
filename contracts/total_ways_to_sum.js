// Total Ways to Sum
// ---------------------------------
// It is possible write four as a sum in exactly four different ways:
// 
//  3 + 1
//  2 + 2
//  2 + 1 + 1
//  1 + 1 + 1 + 1
// 
// How many different distinct ways can the number `target`
// be written as a sum of at least two positive integers?
export function total_ways_to_sum(target) {
  const dp = Array(target + 1).fill(0);

  dp[0] = 1;

  for( let a = 1; a < target; ++a ) {
    for( let i = a; i <= target; ++i ) {
      dp[i] += dp[i - a];
    }
  }

  return dp[target];
}
