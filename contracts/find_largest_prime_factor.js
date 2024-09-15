// Find Largest Prime Factor
// ---------------------------------
// A prime factor is a factor that is a prime number. What is the largest prime factor of `n`?
export function find_largest_prime_factor(n) {
  let m = 1;
  let d = n;

  for(let p = 2; p*p <= n; ++p) {
    while( d % p === 0) {
      m = p;
      d = d / p;
    }
  }
  
  // 最後に残った数が最大数 => それが最大の素因数(つまりnがそもそも素数だった)
  return Math.max(m, d);
}
