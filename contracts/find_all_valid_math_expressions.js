// Find All Valid Math Expressions
// ---------------------------------
// You are given the following string which contains only digits between 0 and 9:
// 
// 4070997244
// 
// You are also given a target number of 63.
// Return all possible ways you can add the +(add), -(subtract), and *(multiply) operators to the string
// such that it evaluates to the target number. (Normal order of operations applies.)
// 
// The provided answer should be an array of strings containing the valid expressions. The data provided by this problem is an array with two elements. The first element is the string of digits, while the second element is the target number:
// 
// ["4070997244", 63]
// 
// NOTE: The order of evaluation expects script operator precedence
// NOTE: Numbers in the expression cannot have leading 0's.
//       In other words, "1+01" is not a valid expression Examples:
// 
// Input: digits = "123", target = 6
// Output: ["1+2+3", "1*2*3"]
// 
// Input: digits = "105", target = 5
// Output: ["1*0+5", "10-5"]
export function find_all_valid_math_expressions([digits, target]) {

  function addOp(expr, digit) {
    const heads = expr.slice(0, expr.length - 1);
    const last = expr[expr.length - 1];

    return [
      [...heads, last + digit],
      [...expr, '+', digit],
      [...expr, '-', digit],
      [...expr, '*', digit],
    ];
  }

  function validExpr(expr) {
    const val = expr[expr.length - 1];
    if ( val.length === 1 ) return true;
    return val[0] !== '0';
  }

  function enumerateExprs(digits) {
    if ( digits.length === 0 ) return [];

    const [first, ...rest] = digits;
    let exprs = [ [first] ];
    for( const digit of rest ) {
      exprs = exprs.
        flatMap((expr) => addOp(expr, digit)).
        filter(validExpr);
    }

    return exprs;
  }

  function findTargetExprs(digits, target) {
    return enumerateExprs(digits).
      map((expr) => expr.join('')).
      filter((expr) => eval(expr) === target);
  }

  return findTargetExprs(digits, target);
}
