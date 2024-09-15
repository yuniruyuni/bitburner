// Unique Paths in a Grid I
// ---------------------------------
// You are in a grid with 11 rows and 3 columns,
// and you are positioned in the top-left corner of that grid.
// You are trying to reach the bottom-right corner of the grid,
// but you can only move down or right on each step.
// Determine how many unique paths there are from start to finish.
// 
// NOTE: The data returned for this contract is an array with the number of rows and columns:
// 
// [11, 3]
export function unique_paths_in_a_grid_i([rows, cols]) {
  const dp = Array(rows).fill(0)
    .map(() => Array(cols).fill(0));

  for( let row = 0; row < rows; ++row ) {
    dp[row][0] = 1;
  }

  for( let col = 0; col < cols; ++col ) {
    dp[0][col] = 1;
  }

  for( let row = 1; row < rows; ++row ) {
    for( let col = 1; col < cols; ++col ) {
      dp[row][col] = dp[row-1][col] + dp[row][col - 1];
    }
  }

  return dp[rows - 1][cols - 1];
}
