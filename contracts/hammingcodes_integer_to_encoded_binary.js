// HammingCodes: Integer to Encoded Binary
// ---------------------------------
// You are given the following decimal `value`: 
// 2710210579640 
// 
// Convert it to a binary representation and encode it as an 'extended Hamming code'.
// The number should be converted to a string of '0' and '1' with no leading zeroes.
// Parity bits are inserted at positions 0 and 2^N.
// Parity bits are used to make the total number of '1' bits in a given set of data even.
// The parity bit at position 0 considers all bits including parity bits.
// Each parity bit at position 2^N alternately considers N bits then ignores N bits, starting at position 2^N.
// The endianness of the parity bits is reversed compared to the endianness of the data bits:
// Data bits are encoded most significant bit first and the parity bits encoded least significant bit first.
// The parity bit at position 0 is set last.
// 
// Examples:
// 8 in binary is 1000, and encodes to 11110000 (pppdpddd - where p is a parity bit and d is a data bit)
// 21 in binary is 10101, and encodes to 1001101011 (pppdpdddpd)
// 
// For more information on the 'rule' of encoding, refer to Wikipedia (https://wikipedia.org/wiki/Hamming_code) or the 3Blue1Brown videos on Hamming Codes. (https://youtube.com/watch?v=X8jsijhllIA)
export function hammingcodes_integer_to_encoded_binary(value) {
  function isPowerOfTwo(n) {
    return (n & (n - 1)) === 0;
  }

  const bins = value.toString(2).split('').map(Number);

  const indexes = [];

  let bits = bins.length;
  let i = 0;
  while ( (1 << i) <= bits ) {
    indexes.push(1 << i);
    i++;
    bits++;
  }


  const encoded = [];

  let binIndex = 0;
  for( let i = 0; i <= bits; ++i ) {
    if( isPowerOfTwo(i) ) {
      encoded.push(0);
    } else {
      encoded.push( bins[binIndex] );
      ++binIndex;
    }
  }

  const parities = encoded.
    reduce((p, b, i) => p ^ (b === 1 ? i : 0), 0).
    toString(2).
    split('').
    map((b) => Number(b)).
    reverse();

  for( let i = 0; i < parities.length; ++i ) {
    encoded[indexes[i]] = parities[i];
  }

  // global parity
  encoded[0] = encoded.reduce((p, b) => p ^ b, 0);

  return encoded.join('');
}
