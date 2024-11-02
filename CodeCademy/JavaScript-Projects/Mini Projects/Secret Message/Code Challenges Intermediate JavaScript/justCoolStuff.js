const justCoolStuff = (arr1, arr2) => {
  return arr1.filter(item => arr2.includes(item));
}

const coolStuff = ['gameboys', 'skateboards', 'backwards hats', 'fruit-by-the-foot', 'pogs', 'my room', 'temporary tattoos'];

const myStuff = [ 'rules', 'fruit-by-the-foot', 'wedgies', 'sweaters', 'skateboards', 'family-night', 'my room', 'braces', 'the information superhighway']; 

console.log(justCoolStuff(myStuff, coolStuff))
// Should print [ 'fruit-by-the-foot', 'skateboards', 'my room' ]

/*
Function Definition:

const justCoolStuff = (arr1, arr2) => {
  return arr1.filter(item => arr2.includes(item));
}

justCoolStuff is a function that takes two arrays, arr1 and arr2, as arguments.
It uses the filter method on arr1 to create a new array.
For each item in arr1, it checks if arr2 includes that item using includes.
If arr2 contains the item, it is kept in the new array.
Arrays Definition:

const coolStuff = ['gameboys', 'skateboards', 'backwards hats', 'fruit-by-the-foot', 'pogs', 'my room', 'temporary tattoos'];
const myStuff = ['rules', 'fruit-by-the-foot', 'wedgies', 'sweaters', 'skateboards', 'family-night', 'my room', 'braces', 'the information superhighway'];

coolStuff is an array of items considered “cool.”
myStuff is an array of items you have.
Function Call and Output:

console.log(justCoolStuff(myStuff, coolStuff));

Calls justCoolStuff with myStuff and coolStuff as arguments.
It returns a new array with items that are in both myStuff and coolStuff.
The result, ['fruit-by-the-foot', 'skateboards', 'my room'], is printed to the console.
Summary: The function finds common items between two arrays and returns them. In this example, it identifies which of your items are also considered “cool.”
*/