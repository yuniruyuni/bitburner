
// Minimum Path Sum in a Triangle
// ---------------------------------
// Given a triangle, find the minimum path sum from top to bottom.
// In each step of the path, you may only move to adjacent numbers in the row below.
// The triangle is represented as a 2D array of numbers:
// 
//  [
//              [3],
//             [4,6],
//            [1,9,1],
//           [9,3,9,5],
//          [8,2,6,3,2],
//         [5,9,7,9,6,5],
//        [3,8,4,1,2,5,2],
//       [4,3,6,9,4,9,5,8],
//      [5,5,1,3,6,8,7,6,6],
//     [8,6,1,9,9,7,6,6,4,6],
//    [7,4,9,4,2,2,1,1,7,8,2],
//   [2,5,8,8,1,8,5,3,4,9,4,9]
// ]
// 
// Example: If you are given the following triangle:
// 
// [
//       [2],
//      [3,4],
//     [6,5,7],
//    [4,1,8,3]
//  ]
// 
// The minimum path sum is 11 (2 -> 3 -> 5 -> 1).
export function minimum_path_sum_in_a_triangle(triangle) {
  for (let j = triangle.length - 2; 0 <= j; --j) {
    for( let i = 0; i < triangle[j].length; ++i) {
      triangle[j][i] += Math.min(
        triangle[j+1][i + 0],
        triangle[j+1][i + 1],
      )
    }
  }

  return triangle[0][0];
}
