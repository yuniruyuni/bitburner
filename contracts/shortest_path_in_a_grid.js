// Shortest Path in a Grid
// ---------------------------------
// You are located in the top-left corner of the following grid:
// 
// [[0,0,0,0,1,1],
//  [0,0,1,1,0,1],
//  [1,0,0,1,1,0],
//  [0,0,0,1,0,0],
//  [0,0,0,0,1,0],
//  [0,0,0,1,0,0],
//  [1,1,0,1,0,0],
//  [1,0,0,0,0,0]]
// 
// You are trying to find the shortest path to the bottom-right corner of the grid,
// but there are obstacles on the grid that you cannot move onto.
// These obstacles are denoted by '1', while empty spaces are denoted by 0.
// 
// Determine the shortest path from start to finish, if one exists.
// The answer should be given as a string of UDLR characters, indicating the moves along the path
// 
// NOTE: If there are multiple equally short paths, any of them is accepted as answer.
//       If there is no path, the answer should be an empty string.
// NOTE: The data returned for this contract is an 2D array of numbers representing the grid.
// 
// Examples:
// 
// [[0,1,0,0,0],
//  [0,0,0,1,0]]
//  
// Answer: 'DRRURRD'
// 
// [[0,1],
//  [1,0]]
//  
// Answer: ''
export function shortest_path_in_a_grid(grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  const dirs = [
    [+1,  0, 'D'],
    [ 0, +1, 'R'],
    [ 0, -1, 'L'],
    [-1,  0, 'U'],
  ];
  
  const visited = Array(rows).fill(0).
    map(() => Array(cols).fill(false));

  if( grid[0][0] === 1 ) return "";

  const queue = [[0, 0, ""]];
  visited[0][0] = true;

  while( 0 < queue.length ) {
    const [x, y, path] = queue.shift();

    if( x === rows - 1 && y === cols - 1 ) {
      return path;
    }

    for( const [dx, dy, dir] of dirs ) {
      const newX = x + dx;
      const newY = y + dy;
      
      if( newX < 0 ) continue;
      if( rows <= newX ) continue;
      if( newY < 0 ) continue;
      if( cols <= newY ) continue;
      if( grid[newX][newY] !== 0 ) continue;
      if( visited[newX][newY] ) continue;

      queue.push([newX, newY, path + dir]);
      visited[newX][newY] = true;
    }
  }

  return "";
}
