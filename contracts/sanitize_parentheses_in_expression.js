// Sanitize Parentheses in Expression
// ---------------------------------
// Given the following string:
// 
// ())a)())((aaa)a)))((
// 
// remove the minimum number of invalid parentheses in order to validate the string.
// If there are multiple minimal ways to validate the string, provide all of the possible results.
// The answer should be provided as an array of strings.
// If it is impossible to validate the string the result should be an array with only an empty string.
// 
// IMPORTANT: The string may contain letters, not just parentheses. Examples:
// "()())()" -> ["()()()", "(())()"]
// "(a)())()" -> ["(a)()()", "(a())()"]
// ")(" -> [""]
export function sanitize_parentheses_in_expression(str) {

  function isValid(str) {
    let balance = 0;
    for ( const char of str ) {
      if( char === '(') balance++;
      if( char === ')') balance--;
      if( balance < 0 ) return false;
    }
    return balance === 0;
  }
  
  const result = [];
  const queue = [str];
  const visited = new Set();

  while( 0 < queue.length ) {
    const level = queue.length;

    for( let i = 0; i < level; ++i ) {
      const current = queue.shift();
      if( isValid(current) ) {
        result.push(current);
      }

      for( let j = 0; j < current.length; ++j ) {
        if ( current[j] !== '(' && current[j] !== ')' ) continue;

        const next = current.slice(0, j) + current.slice(j + 1);
        if( !visited.has(next) ) {
          queue.push(next);
          visited.add(next);
        }
      }
    }

    if( 0 < result.length ) return result;
  }

  return [];
}
