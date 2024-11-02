const numbers = [2, 7, 9, 171, 52, 33, 14];

const toSquare = num => num * num

const squareNums = arr => arr.map(toSquare) 

/*
// Using an anonymous function:
const squareNums = arr => arr.map(e => e * e)

// As a function declaration plus using our named function:
function squareNums(arr) {
    return arr.map(toSquare)
}
*/

/*
The goal is to create a function squareNums that takes an array of numbers and returns a new array with each number squared.

Function Expression:

A function expression assigns a function to a variable.
Here’s how to write squareNums as a function expression:
const squareNums = arr => arr.map(num => num * num);

squareNums is a function that takes an array arr.
It uses .map() to square each number in the array.
Function Declaration:

A function declaration defines a function with a name.
Here’s how to write squareNums as a function declaration:
function squareNums(arr) {
  return arr.map(num => num * num);
}
*/

/*
Let’s break down how const squareNums = arr => arr.map(toSquare) works:

Function Expression:

squareNums is defined as a function expression using arrow function syntax.
It takes one parameter, arr, which is expected to be an array of numbers.
Using .map():

The .map() method is called on the arr array.
.map() creates a new array by applying a function to each element of the original array.
Function toSquare:

toSquare is a separate function defined earlier that takes a number and returns its square.
Example: toSquare(3) returns 9.
Applying toSquare:

arr.map(toSquare) applies the toSquare function to each element in the arr array.
For example, if arr is [2, 3, 4], toSquare is applied to each element, resulting in [4, 9, 16].
Result:

The result is a new array where each element is the square of the corresponding element in the original array.
Here’s a complete example:

const toSquare = num => num * num;

const squareNums = arr => arr.map(toSquare);

const numbers = [2, 3, 4];
console.log(squareNums(numbers)); // Output: [4, 9, 16]

In this example, squareNums(numbers) returns a new array [4, 9, 16], where each number is the square of the numbers in the numbers array.

If you call squareNums(5), it will result in an error because squareNums is designed to take an array as an argument, not a single number. The .map() method expects an array to iterate over, and passing a single number will cause it to fail.
*/