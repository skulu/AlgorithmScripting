/*
== Problem ==
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

== Test Cases ==
- rot13("SERR PBQR PNZC") should decode to the string FREE CODE CAMP
- rot13("SERR CVMMN!") should decode to the string FREE PIZZA!
- rot13("SERR YBIR?") should decode to the string FREE LOVE?
- rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.") should decode to the string THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.
*/

function rot13(str) {
  str = str.split('');
  console.log(str);

  for (let i = 0; i < str.length; i++) {
    code = str[i].charCodeAt(0);
    // We know that A is 65 and Z is 90 in UTF-16 code.
    if (65 <= code && code <= 90) {
      code -= 13;

      // We need to loop the code around if it goes below 65 and continue counting from Z or 90.
      if (code < 65) {
        code = 65 - code - 1;
        code = 90 - code;
      } 
    }
    str[i] = code;
  }
  return String.fromCharCode(...str);
}
