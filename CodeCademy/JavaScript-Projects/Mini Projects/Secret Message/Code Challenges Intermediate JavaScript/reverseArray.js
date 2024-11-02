const reverseArray = arr => {
  let reversed = [];
  for (let i = arr.length - 1; i >= 0; i--){
    reversed.push(arr[i]);
  } 
  return reversed
}

const sentence = ['sense.','make', 'all', 'will', 'This'];

console.log(reverseArray(sentence)) 
// Should print ['This', 'will', 'all', 'make', 'sense.'];

/*
Function Definition:

const reverseArray = arr => {


Defines a function reverseArray using arrow function syntax.
Takes one parameter, arr, which is the array to be reversed.
Initialize reversed Array:

let reversed = [];


Creates an empty array reversed to store the elements in reverse order.
Loop Through arr Backwards:

for (let i = arr.length - 1; i >= 0; i--) {
  reversed.push(arr[i]);
}


A for loop starts with i set to the last index of arr (arr.length - 1).
The loop continues as long as i is greater than or equal to 0.
In each iteration, arr[i] (the current element) is added to the reversed array using push().
Return reversed Array:

return reversed;


After the loop completes, the function returns the reversed array, which now contains the elements of arr in reverse order.
Example Usage:

const sentence = ['sense.', 'make', 'all', 'will', 'This'];
console.log(reverseArray(sentence));


An array sentence is defined.
reverseArray(sentence) is called, reversing the order of elements.
The result, ['This', 'will', 'all', 'make', 'sense.'], is printed to the console.
The function effectively reverses the order of elements in any given array.
*/