
// Spiralize Matrix
// ---------------------------------
// Given the following array of arrays of numbers representing a 2D matrix,
// return the elements of the matrix as an array in spiral order:
// 
// [
//   [ 6,44,26,35,13,30,38, 3]
//   [13,10,22,39,13, 2, 1,13]
//   [12,10,50, 8,21,43,11,35]
//   [31,14,43,46,28,46,13,22]
//   [40,28,21,10, 5,41,15,42]
//   [43,17,42,29,12,16,45,23]
//   [48,30,14,42,24,21,17,26]
//   [43,38,22,38, 2,31,37, 6]
//   [ 5, 7,32,24,29, 9, 5,32]
//   [16,19, 2,11,23,36, 6,38]
//   [ 8, 8,44, 8,20, 4, 3,10]
//   [42,14,20,20,26,43,50,36]
// ]
// 
// Here is an example of what spiral order should be:
// 
//  [
//    [1, 2, 3]
//    [4, 5, 6]
//    [7, 8, 9]
//  ]
// 
//  Answer: [1, 2, 3, 6, 9, 8 ,7, 4, 5]
// 
//  Note that the matrix will not always be square:
// 
//  [
//    [1, 2, 3, 4]
//    [5, 6, 7, 8]
//    [9,10,11,12]
//  ]
// 
//  Answer: [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]
export function spiralize_matrix(matrix) {
  if( matrix.length === 0 ) return [];

  const result = [];

  let top = 0;
  let bottom = matrix.length - 1;
  let left = 0;
  let right = matrix[0].length - 1;

  // @ignore-infinite
  while( true ) {
    for( let i = left; i <= right; ++i ) {
      result.push(matrix[top][i]);
    }
    ++top;
    if( bottom < top ) break;

    for( let i = top; i <= bottom; ++i ) {
      result.push(matrix[i][right]);
    }
    --right;
    if( right < left ) break;

    for( let i = right; left <= i; --i ) {
      result.push(matrix[bottom][i]);
    }
    --bottom;
    if( bottom < top ) break;

    for( let i = bottom; top <= i; --i ) {
      result.push(matrix[i][left]);
    }
    ++left;
    if( right < left ) break;
  }  

  return result;
}
