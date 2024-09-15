// Total Ways to Sum II
// ---------------------------------
// How many different distinct ways can the number 149 be written as a sum of integers contained in the set:
// 
//  [2,7,10,11,12,13,15,16,18,19,22,25]?
// 
//  You may use each integer in the set zero or more times.
export function total_ways_to_sum_ii([target, numbers]) {
  const dp = Array(target + 1).fill(0);

  dp[0] = 1;

  for( const num of numbers ) {
    for(let i = num; i <= target ; ++i){
      dp[i] += dp[i - num];
    }
  }

  return dp[target];
}
