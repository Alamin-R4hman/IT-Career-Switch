const shoutGreetings = arr => {
  let newArr = [];

  for(let i = 0; i < arr.length; i++){
    newArr.push(`${arr[i].toUpperCase()}!`)
  }
  return newArr
}

const greetings = ['hello', 'hi', 'heya', 'oi', 'hey', 'yo'];

console.log(shoutGreetings(greetings))
// Should print [ 'HELLO!', 'HI!', 'HEYA!', 'OI!', 'HEY!', 'YO!' ]

/*
Function Definition:

const shoutGreetings = arr => {

Defines a function shoutGreetings using arrow function syntax.
Takes one parameter, arr, which is expected to be an array of strings.
Initialize newArr:

let newArr = [];

Creates an empty array newArr to store the modified strings.
for Loop:

for (let i = 0; i < arr.length; i++) {
  newArr.push(`${arr[i].toUpperCase()}!`);
}

Iterates over each element in the arr array using a for loop.
i is the index of the current element.
For each element, it converts the string to uppercase using .toUpperCase() and appends an exclamation mark !.
The modified string is then added to newArr using push().
Return newArr:

return newArr;

After the loop completes, the function returns the newArr array, which contains the modified strings.
Example Usage:

const greetings = ['hello', 'hi', 'heya', 'oi', 'hey', 'yo'];
console.log(shoutGreetings(greetings));

An array greetings is defined with several greeting words.
shoutGreetings(greetings) is called, which processes each greeting in the array.
The result, ['HELLO!', 'HI!', 'HEYA!', 'OI!', 'HEY!', 'YO!'], is printed to the console.
The function effectively takes each greeting, converts it to uppercase, adds an exclamation mark, and returns a new array with these modified greetings.
*/
