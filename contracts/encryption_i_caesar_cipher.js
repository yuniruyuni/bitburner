
// Encryption I: Caesar Cipher
// ---------------------------------
// Caesar cipher is one of the simplest encryption technique.
// It is a type of substitution cipher in which
// each letter in the plaintext is replaced by a letter some fixed number of positions down the alphabet.
// For example, with a left shift of 3,
//   D would be replaced by A,
//   E would become B, and
//   A would become X (because of rotation).
// 
//  You are given an array with two elements:
//    ["MOUSE FRAME MACRO CACHE LOGIN", 25]
//  The first element is the plaintext, the second element is the left shift value.
//
//  Return the ciphertext as uppercase string. Spaces remains the same.
export function encryption_i_caesar_cipher([text, shift]) {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  let decoded = "";
  
  for( let i = 0 ; i < text.length; ++i ) {
    const c = text.charAt(i);
    if (!alphabet.includes(c)) {
      decoded += c;
      continue;
    }

    const shifted = (alphabet.length + (alphabet.indexOf(c) - shift)) % alphabet.length;
    decoded += alphabet[shifted];
  }

  return decoded;
}
