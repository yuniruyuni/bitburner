
// Merge Overlapping Intervals
// ---------------------------------
// Given the following array of arrays of numbers representing a list of intervals,
// merge all overlapping intervals.
// 
// [[25,30],[17,27],[19,21],[7,14],[10,16],[24,27],[5,12],[2,7],[22,29]]
// 
// Example:
// 
// [[1, 3], [8, 10], [2, 6], [10, 16]]
// 
// would merge into [[1, 6], [8, 16]].
// 
// The intervals must be returned in ASCENDING order.
// You can assume that in an interval, the first number will always be smaller than the second.
export function merge_overlapping_intervals(intervals) {
  if( intervals.length === 0 ) return [];

  intervals.sort((a, b) => a[0] - b[0]);

  const merged = [intervals[0]];

  for( let i = 1; i < intervals.length; ++i ) {
    const lastMerged = merged[merged.length - 1];
    const current = intervals[i];

    if( current[0] <= lastMerged[1] ) {
      lastMerged[1] = Math.max(lastMerged[1], current[1])
    } else {
      merged.push(current);
    }
  }
  
  return merged;
}
