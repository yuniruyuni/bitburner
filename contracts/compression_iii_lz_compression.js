
// Compression III: LZ Compression
// ---------------------------------
// Lempel-Ziv (LZ) compression is a data compression technique which
// encodes data using references to earlier parts of the data.
// In this variant of LZ, data is encoded in two types of chunk.
// Each chunk begins with a length L, encoded as a single ASCII digit from 1 to 9,
// followed by the chunk data, which is either:
// 
//   1. Exactly L characters, which are to be copied directly into the uncompressed data.
//   2. A reference to an earlier part of the uncompressed data.
//      To do this, the length is followed by a second ASCII digit X:
//      each of the L output characters is a copy of the character X
//      places before it in the uncompressed data.
// 
//  For both chunk types, a length of 0 instead means the chunk ends immediately,
//  and the next character is the start of a new chunk.
// The two chunk types alternate, starting with type 1, and the final chunk may be of either type.
// 
//  You are given the following input string:
//      04PzOSk0NQGPzOSka0acNNNNNNNNNUf3Tq60NNUfVITDuUfVUfVUfVUMNMftUfVUMNMft2ft2ft2ft2k2fteYPk2fte
//  Encode it using Lempel-Ziv encoding with the minimum possible output length.
// 
//  Examples (some have other possible encodings of minimal length):
//      abracadabra     ->  7abracad47
//      mississippi     ->  4miss433ppi
//      aAAaAAaAaAA     ->  3aAA53035
//      2718281828      ->  627182844
//      abcdefghijk     ->  9abcdefghi02jk
//      aaaaaaaaaaaa    ->  3aaa91
//      aaaaaaaaaaaaa   ->  1a91031
//      aaaaaaaaaaaaaa  ->  1a91041
export function compression_iii_lz_compression(raw) {
  const n = raw.length;

  const maxL = calcMaxLength(raw);

  const dp = Array(n + 1).fill(0).map(() => [Infinity, Infinity]);
  const parent = Array(n + 1).fill(0).map(() => [null, null]);

  // 0: literal
  // 1: reference

  dp[0][0] = 0;

  for( let i = 0; i <= n; ++i ) {
    for( let t = 0; t <= 1; ++t ) {
      if( Infinity <= dp[i][t] ) continue;

      const cost0 = dp[i][t] + 1;
      if( cost0 < dp[i][1-t] ) {
        dp[i][1 - t] = cost0;
        parent[i][1 - t] = { act: 'zero', t, i };
      }

      if( t === 0 ) {
        for( let l = 1; l <= Math.min(9, n - i); ++l ) {
          const cost = dp[i][t] + 1 + l;
          if( dp[i + l][1 - t] <= cost ) continue;

          dp[i + l][1 - t] = cost;
          parent[i + l][1 - t] = { act: 'literal', t, i, l };
        }
      }

      if( t === 1 ) {
        for (let o = 1; o <= 9; ++o) {
          if( i - o < 0 ) continue;

          const ml = Math.min(maxL[i][o], 9, n - i);

          for( let l = 1; l <= ml; ++l ) {
            const cost = dp[i][t] + 2;
            if( dp[i + l][1 - t] <= cost ) continue;

            dp[i + l][1 - t] = cost;
            parent[i + l][1 - t] = { act: 'reference', t, i, l, o };
          }
        }
      }
    }
  }


  let t = dp[n][0] <= dp[n][1] ? 0 : 1;
  let i = n;
  const steps = [];

  while( 0 < i || parent[i][t] !== null ) {
    const p = parent[i][t];
    if (!p) break;

    const { act, t: pt, i: pi, l, o } = p;
    steps.push({ act, t, i, l, o });
    t = pt;
    i = pi;
  }

  steps.reverse();

  let encoded = "";

  for( const step of steps ) {
    const { act, i, l, o } = step;

    if( act === 'zero' ) {
      encoded += '0';
    } else if ( act === 'literal' ) {
      encoded += `${l}${raw.slice(i - l, l)}`
    } else if ( step.act === 'reference' ) {
      encoded += `${l}${o}`;
    }
  }

  return encoded;
}



export function calcMaxLength(raw) {
  const n = raw.length;
  const dp = Array(n+1).fill(0).map(() => Array(10).fill(0));

  for( let i = n - 1; 0 <= i; --i ) {
    for( let o = 1; o <= 9; ++o ) {
      dp[i][o] = 0;
      
      if( i - o < 0 )  continue;
      if( raw[i] !== raw[i-o] ) continue;

      if( i + 1 < n ) {
        dp[i][o] = 1 + dp[i + 1][o];
      } else {
        dp[i][o] = 1;
      }
    }
  }
  return dp;
}