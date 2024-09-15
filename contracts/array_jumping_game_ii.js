// Array Jumping Game II
// ---------------------------------
// You are given the following array of integers:
// 
//  2,5,2,2,1,2,4,1,3,5,1
// 
// Each element in the array represents your MAXIMUM jump length at that position.
// This means that if you are at position i and your maximum jump length is n,
// you can jump to any position from i to i+n. 
// 
// Assuming you are initially positioned at the start of the array,
// determine the minimum number of jumps to reach the end of the array.
// 
// If it's impossible to reach the end, then the answer should be 0.
export function array_jumping_game_ii(jumps) {
  let count = 0;
  let currentReachable = 0;
  let nextReachable = 0;

  for( let i = 0; i < jumps.length; ++i ) {
    nextReachable = Math.max(nextReachable, i + jumps[i]);

    if( i === currentReachable ) {
      count++;
      currentReachable = nextReachable;

      if( jumps.length - 1 <= currentReachable ) {
        return count;
      }
    }
  }

  return 0;
}
