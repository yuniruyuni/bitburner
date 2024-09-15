// Unique Paths in a Grid II
// ---------------------------------
// You are located in the top-left corner of the following grid:
// 
// 0,0,0,0,0,
// 0,1,0,0,0,
// 
// You are trying reach the bottom-right corner of the grid,
// but you can only move down or right on each step.
// Furthermore, there are obstacles on the grid that you cannot move onto.
// These obstacles are denoted by '1', while empty spaces are denoted by 0.
// 
// Determine how many unique paths there are from start to finish.
// 
// NOTE: The data returned for this contract is an 2D array of numbers representing the grid.
export function unique_paths_in_a_grid_ii(grid) {
  function flip(v) { return v === 0 ? 1 : 0; }
  if( grid.length === 0 ) return 0;

  const rows = grid.length;
  const cols = grid[0].length;

  const dp =  Array(rows).fill(0).
    map(() => Array(cols).fill(0));
  
  dp[0][0] = flip(grid[0][0]);

  for( let row = 1; row < rows; ++row ) {
    dp[row][0] = dp[row-1][0] * flip(grid[row][0]);
  }

  for( let col = 1; col < cols; ++col ) {
    dp[0][col] = dp[0][col-1] * flip(grid[0][col]);
  }
  
  for( let row = 1; row < rows; ++row ) {
    for( let col = 1; col < cols; ++col ) {
      dp[row][col] = (dp[row-1][col] + dp[row][col-1]) * flip(grid[row][col]);
    }
  }

  return dp[rows - 1][cols - 1];
}
