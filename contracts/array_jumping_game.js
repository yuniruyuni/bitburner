// Array Jumping Game
// ---------------------------------
// You are given the following array of integers:
// 
//  2,8,3,4,3,1,0,0,9,1,10,0,6
// 
// Each element in the array represents your MAXIMUM jump length at that position.
// This means that if you are at position i and your maximum jump length is n,
// you can jump to any position from i to i+n. 
// 
// Assuming you are initially positioned at the start of the array,
// determine whether you are able to reach the last index.
// 
// Your answer should be submitted as 1 or 0, representing true and false respectively.
export function array_jumping_game(jumps) {
  let reachable = 0;

  for( let i = 0; i < jumps.length; ++i ) {
    if( i > reachable ) return 0;

    reachable = Math.max(reachable, i + jumps[i]);
    if( jumps.length <= reachable ) return 1;
  }

  return 0;
}
