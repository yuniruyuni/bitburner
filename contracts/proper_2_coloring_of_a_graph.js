
// Proper 2-Coloring of a Graph
// ---------------------------------
// You are given the following data, representing a graph:
//  [9, [[5,8],[1,5],[1,4],[5,6],[2,5],[4,6],[4,7],[0,6]]]
// Note that "graph", as used here, refers to the field of graph theory,
// and has no relation to statistics or plotting.
// The first element of the data represents the number of vertices in the graph.
// Each vertex is a unique number between 0 and 8.
// The next element of the data represents the edges of the graph.
// Two vertices u,v in a graph are said to be adjacent if there exists an edge [u,v].
// Note that an edge [u,v] is the same as an edge [v,u], as order does not matter.
// You must construct a 2-coloring of the graph,
// meaning that you have to assign each vertex in the graph a "color",
// either 0 or 1, such that no two adjacent vertices have the same color.
// Submit your answer in the form of an array,
// where element i represents the color of vertex i.
// If it is impossible to construct a 2-coloring of the given graph, instead submit an empty array.
// 
//  Examples:
// 
//  Input: [4, [[0, 2], [0, 3], [1, 2], [1, 3]]]
//  Output: [0, 0, 1, 1]
// 
//  Input: [3, [[0, 1], [0, 2], [1, 2]]]
//  Output: []
export function proper_2_coloring_of_a_graph([n, edges]) {
  const adjs = Array(n).fill(0).map(() => ([]));
  for( const [u, v] of edges ) {
    adjs[u].push(v);
    adjs[v].push(u);
  }

  // Assume 0 is not colored, -1 is red, 1 is blue.
  // (the problem's assuming is 0 is red, 1 is blue, so we need convert it after.)

  const colors = Array(n).fill(0);

  function bfs(start) {
    colors[start] = 1;

    const queue = [start];
    while( 0 < queue.length ) {
      const node = queue.shift();
      const color = colors[node];

      for( const neighbor of adjs[node] ) {
        const ncolor = colors[neighbor];
        if( ncolor === 0 ) {
          colors[neighbor] = -color;
          queue.push(neighbor);
          continue;
        }
        
        if ( ncolor === color ) {
          return false;
        }
      }
    }

    return true;
  }

  for(let i = 0; i < n; ++i) {
    if( colors[i] === 0 ) {
      if( !bfs(i) ) {
        return [];
      }
    }
  }

  return colors.map((c) => c === -1 ? 0 : 1);
}
