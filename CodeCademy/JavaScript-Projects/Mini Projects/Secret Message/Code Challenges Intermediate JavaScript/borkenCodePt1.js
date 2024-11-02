/*
Fix The Broken Code!
We wrote a function, smallestPowerOfTwo(), which should take in an array and return the lowest power of 2 that is greater than or equal to each number in that array. A power of two is any value 2n where n is a non-negative integer (including 0). The list of powers of 2 for non-negative integers starts with [1, 2, 4, 8, 16, 32, 64,...] where 20=1, 21=2, 22=4, and so on.

For example, if the array were:

const myArray = [6, 2, 11, 50];

Then the smallestPowerOfTwo() function should return the following array:

[ 8, 2, 16, 64 ]
*/

//Within our smallestPowerOfTwo() function, we create a new array called results. We then loop through the argument array and calculate the smallest power of two which is greater than or equal to the current element before using .push() to add it to results.

const numbers = [5, 3, 9, 30];

const smallestPowerOfTwo = arr => {
      let results = [];
      // The 'outer' for loop - loops through each element in the array
      for (let i = 0; i < arr.length; i++) {
            let number = arr[i];
            let power = 1
            // The 'inner' while loop - searches for smallest power of 2 greater than the given number
      
            while (power < number) {
                  power *= 2;
            }
            results.push(power);
      }
      return results
}

console.log(smallestPowerOfTwo(numbers)) 
// Should print the returned array [ 8, 4, 16, 32 ] instead prints the returned array [8]

/*
Function Definition:

const smallestPowerOfTwo = arr => {

Defines a function smallestPowerOfTwo that takes an array arr as an argument.
Initialize results Array:

let results = [];

Creates an empty array results to store the smallest power of 2 for each number in arr.
Outer for Loop:

for (let i = 0; i < arr.length; i++) {

Iterates over each element in the array arr.
i is the index of the current element.
Get Current Number:

let number = arr[i];

Retrieves the current number from the array using the index i.
Initialize power Variable:

let power = 1;

Initializes a variable power to 1, which will be used to find the smallest power of 2 greater than number.
Inner while Loop:

while (power < number) {
  power *= 2;
}

Continues multiplying power by 2 until it is greater than or equal to number.
This loop finds the smallest power of 2 that is greater than or equal to number.
Add Result to results:

results.push(power);

Appends the calculated power to the results array.
Return results Array:

return results;

After the loop completes, the function returns the results array, which contains the smallest power of 2 for each number in arr.
Example Usage:

console.log(smallestPowerOfTwo(numbers));

Calls the function with the numbers array and prints the result, which should be [8, 4, 16, 32].
The key change was using a separate variable power for the inner loop to avoid overwriting the loop index i. This ensures the function correctly calculates the smallest power of 2 for each number.
*/