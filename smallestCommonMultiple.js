/*
Source: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/smallest-common-multiple

--Problem--
Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.

--Test Cases--
- smallestCommons([1, 5]) and smallestCommons([5,1]) should return 60.
- smallestCommons([2, 10]) should return 2520
- smallestCommons([1, 13]) should return 360360
- smallestCommons([23, 18]) should return 6056820
*/

function smallestCommons(arr) {
/*
1. Find min and max in the provided arr.
2. First let common = max*(max-1). This is the smallest number that can possibly be divided by all numbers ranging from min to max.
3. If not divisible, check next multiple of max.
4. Repeat until we find the lowest common multiple.
*/
  
  const [min, max] = arr.sort((a,b) => a-b);

  let divisible, x = 0, common;
  do {
    divisible = true;
    common = max*(max-1) + x*max;
    for (let i = max; i >= min; i--) {
      if (common%i != 0) {
        divisible = false;
      }
    }
    x++;
  } while (!divisible);
  
  return common;
}

console.log(smallestCommons([1,5]));
