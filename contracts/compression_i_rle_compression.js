
// Compression I: RLE Compression
// ---------------------------------
// Run-length encoding (RLE) is a data compression technique
// which encodes data as a series of runs of a repeated single character.
// Runs are encoded as a length, followed by the character itself.
// Lengths are encoded as a single ASCII digit; runs of 10 characters or more are encoded
// by splitting them into multiple runs.
// 
// You are given the following input string:
//     hWW88KKKKKKKKKrwPq333333333333gggggggggggg1ERRZZZIIIRRRRRRRRRRRRR
// Encode it using run-length encoding with the minimum possible output length.
// 
// Examples:
//     aaaaabccc            ->  5a1b3c
//     aAaAaA               ->  1a1A1a1A1a1A
//     111112333            ->  511233
//     zzzzzzzzzzzzzzzzzzz  ->  9z9z1z  (or 9z8z2z, etc.)
export function compression_i_rle_compression(raw) {
  let encoded = "";
  let count = 1;

  // if raw[raw.length] will be undefined so it is sentinel for final rest string encoding.
  for( let i = 1; i <= raw.length; ++i ) {
    if( raw[i] === raw[i - 1] ) {
      ++count;
      continue;
    }

    const c = raw[i - 1];

    while( count > 9 ) {
      encoded += `9${c}`;
      count -= 9;
    }
    encoded += `${count}${c}`;
    count = 1;
  }
  
  return encoded;
}
