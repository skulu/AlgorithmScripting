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
1. If numbers are consecutive, return their multiple.
2. Let the large number be x and smaller number be y. Let common be the result to return.
2. First let common = x*(x-1). This is the smallest number that can possibly be divided by all numbers between x and y.
3. If not divisible, add x to common and check again. To be divisible by x, common must increase in multiples of x. We can then check for division by all other numbers between x and y.
4. Repeat until we find the lowest common multiple.
*/
  
  if (Math.abs(arr[0] - arr[1]) == 1)
    return arr[0]*arr[1]; 
  else
    arr.sort((a,b) => a-b);

  let divisible, x = 0, common;
  do {
    divisible = true;
    common = arr[1]*(arr[1]-1) + x*arr[1];
    for (let i = arr[1]; i >= arr[0]; i--) {
      if (common%i != 0) {
        divisible = false;
      }
    }
    x++;
  } while (!divisible);
  
  return common;
}

console.log(smallestCommons([1,5]));
