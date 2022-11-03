/*
== Problem ==
Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

Calling this returned function with a single argument will then return the sum:

var sumTwoAnd = addTogether(2);
sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined.

== Test Cases ==
- addTogether(2, 3) should return 5.
- addTogether(23, 30) should return 53.
- addTogether(5)(7) should return 12.
- addTogether("https://www.youtube.com/watch?v=dQw4w9WgXcQ") should return undefined.
- addTogether(2, "3") should return undefined.
- addTogether(2)([3]) should return undefined.
- addTogether("2", 3) should return undefined.
- addTogether(5, undefined) should return undefined.
*/

function addTogether() {
  const [first, second] = arguments;

  // Check if first argument is valid, if not return undefined.
  if (typeof first !== 'number') {
    return undefined;
  }

  // Check if there is only 1 argument provided. If yes return a function which accepts another argument to add to the first argument.
  if (arguments.length === 1) {
    return (y) => addTogether(first, y);
  }

  // If there is more than 1 argument, check if the second one is valid.
  if (typeof second !== 'number') {
    return undefined;
  }

  // finally return the desired result for the case with 2 arguments.
  return first + second;
}
