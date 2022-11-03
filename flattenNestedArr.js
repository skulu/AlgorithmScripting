/*
Source: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/steamroller

==Problem==
Flatten a nested array. You must account for varying levels of nesting.

==Test cases and requirements==
- steamrollArray([[["a"]], [["b"]]]) should return ["a", "b"].
- steamrollArray([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4].
- steamrollArray([1, [], [3, [[4]]]]) should return [1, 3, 4].
- steamrollArray([1, {}, [3, [[4]]]]) should return [1, {}, 3, 4].
- Your solution should not use the Array.prototype.flat() or Array.prototype.flatMap() methods.
- Global variables should not be used.

==Solution Description==
1. Create an array to store the flattened array.
2. Use recursion, if the element in 'arr' is an Array, pass it into steamrollArray() to flatten it further.
3. Base case will be a non-array, which is simply pushed into 'flattened'.
*/

function steamrollArray(arr) {
  const flattened = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flattened.push(...steamrollArray(arr[i]));
    } else {
      flattened.push(arr[i]);
    }
  }
  return flattened;
  
//   ==Alternative==
//   let flattened = [].concat(...arr);
//   if (flattened.some(Array.isArray)) {
//     flattened = steamrollArray(flattened);
//   }
//   return flattened;
}

steamrollArray([1, [2], [3, [[4]]]]);
