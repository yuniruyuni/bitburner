// Subarray with Maximum Sum
// ---------------------------------
// Given the following integer `nums`,
// find the contiguous subarray (containing at least one number)
// which has the largest sum and return that sum.
// 'Sum' refers to the sum of all the numbers in the subarray.
// 
// 9,-5,-2,-10,5,9,-5,-5,4,2,0,-1,5,9,-6,6,4,-3,10,0,8,-6,-4,8,-6,-1,-6,-10,1,-9,10,10,-7,-3,1,-4
export function subarray_with_maximum_sum(nums) {
  let sum = nums[0];
  let max = nums[0];

  for( let i = 1; i < nums.length; ++i ) {
    const n = nums[i];
    sum = Math.max(n, sum + n);
    max = Math.max(max, sum);
  }

  return max;
}
