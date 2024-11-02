//Imagine you had a grocery list and you wanted to know what each item on the list was. You’d have to scan through each row and check for the item. This common task is similar to what we have to do when we want to iterate over, or loop through, an array. One tool at our disposal is the for loop. However, we also have access to built-in array methods which make looping easier.

//The built-in JavaScript array methods that help us iterate are called iteration methods, at times referred to as iterators. Iterators are methods called on arrays to manipulate elements and return values.

const artists = ['Picasso', 'Kahlo', 'Matisse', 'Utamaro'];

artists.forEach(artist => {
  console.log(artist + ' is one of my favorite artists.');
});

/*
Picasso is one of my favorite artists.
Kahlo is one of my favorite artists.
Matisse is one of my favorite artists.
Utamaro is one of my favorite artists.
*/

const numbers = [1, 2, 3, 4, 5];

const squareNumbers = numbers.map(number => {
  return number * number;
});

console.log(squareNumbers); //[ 1, 4, 9, 16, 25 ]

const things = ['desk', 'chair', 5, 'backpack', 3.14, 100];

const onlyNumbers = things.filter(thing => {
  return typeof thing === 'number';
});

console.log(onlyNumbers);//[ 5, 3.14, 100 ]

//The .forEach() Method

//Aptly named, .forEach() will execute the same code for each element of an array.

const groceries = ['brown sugar', 'salt', 'milk', 'nuts'];

groceries.forEach(function(groceryItem){
  console.log(' - ' + groceryItem);
});

/*
The code above will log a nicely formatted list of the groceries to the console. Let’s explore the syntax of invoking .forEach().

groceries.forEach() calls the forEach method on the groceries array.

.forEach() takes an argument of callback function. Remember, a callback function is a function passed as an argument into another function.

.forEach() loops through the array and executes the callback function for each element. During each execution, the current element is passed as an argument to the callback function.

The return value for .forEach() will always be undefined.

Another way to pass a callback for .forEach() is to use arrow function syntax.
*/

groceries.forEach(groceryItem => console.log(groceryItem));

//We can also define a function beforehand to be used as the callback function.

function printGrocery(element){
  console.log(element);
}

groceries.forEach(printGrocery);

//All three code snippets do the same thing. In each array iteration method, we can use any of the three examples to supply a callback function as an argument to the iterator.

// The .map() Method //

//The second iterator we’re going to cover is .map(). When .map() is called on an array, it takes an argument of a callback function and returns a new array! Take a look at an example of calling .map():

const numbers = [1, 2, 3, 4, 5]; 

const bigNumbers = numbers.map(number => {
  return number * 10;
});

/*
.map() works in a similar manner to function provided. .forEach() — the major difference is that .map() returns a new array.

In the example above:

numbers is an array of numbers.
bigNumbers will store the return value of calling .map() on numbers.

numbers.map will iterate through each element in the numbers array and pass the element into the callback function.

return number * 10 is the code we wish to execute upon each element in the array. This will save each value from the numbers array, multiplied by 10, to a new array.

If we take a look at numbers and bigNumbers:
*/

console.log(numbers); // Output: [1, 2, 3, 4, 5]
console.log(bigNumbers); // Output: [10, 20, 30, 40, 50]

//Notice that the elements in numbers were not altered and bigNumbers is a new array.

//The .map() method doesn’t inherently print anything. Instead, it creates a new array by applying a function to each element of an existing array.

//For example, if you want to use .map() to get the first letter of each string in an array:

const words = ['apple', 'banana', 'cherry'];
const firstLetters = words.map(word => word[0]);
console.log(firstLetters); // Output: ['a', 'b', 'c']

//In this example, .map() creates a new array firstLetters containing the first letter of each word in the words array. The function word => word[0] is applied to each element, extracting the first character.

//The .map() method is used to transform each element of the array according to the logic defined in the callback function.

// The .filter() method //

//The .filter() method creates a new array with elements that pass a test defined by a function. Here’s a simple example:

//Imagine you have an array of numbers and you want to keep only the even numbers:

const numbers = [1, 2, 3, 4, 5, 6];

// Use .filter() to keep only even numbers
const evenNumbers = numbers.filter(number => number % 2 === 0);

console.log(evenNumbers); // Output: [2, 4, 6]

/*How it works:

numbers.filter(number => number % 2 === 0) applies the function number => number % 2 === 0 to each element

The function checks if a number is even (number % 2 === 0).
If true, the number is included in the new array evenNumbers.

The result is an array of even numbers: [2, 4, 6].
Another example with strings:
*/

const words = ['apple', 'banana', 'cherry', 'date'];

// Use .filter() to keep words with more than 5 letters
const longWords = words.filter(word => word.length > 5);

console.log(longWords); // Output: ['banana', 'cherry']

//How it works:

/*
words.filter(word => word.length > 5) checks if each word has more than 5 letters.
Words that pass the test are included in longWords.
The result is ['banana', 'cherry'].
The .filter() method is useful for selecting elements based on specific conditions.
*/

const randomNumbers = [375, 200, 3.14, 7, 13, 852];

const smallNumbers = randomNumbers.filter(num =>{
  return num < 250;
}); //Will return numbers less than 250

const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];

const longFavoriteWords = favoriteWords.filter(fav =>{
  return fav.length > 7;
}); //Returns words longer than 7 letters

// The .findIndex() Method //

//We sometimes want to find the location of an element in an array. That’s where the .findIndex() method comes in! Calling.findIndex() on an array will return the index of the first element that evaluates to true in the callback function.

const jumbledNums = [123, 25, 78, 5, 9]; 

const lessThanTen = jumbledNums.findIndex(num => {
  return num < 10;
});

/*
jumbledNums is an array that contains elements that are numbers.

const lessThanTen = declares a new variable that stores the returned index number from invoking .findIndex().

The callback function is an arrow function that has a single parameter, num. Each element in the jumbledNums array will be passed to this function as an argument.

num < 10; is the condition that elements are checked against. .findIndex() will return the index of the first element which evaluates to true for that condition.

Let’s take a look at what lessThanTen evaluates to:
*/

console.log(lessThanTen); // Output: 3

//If we check what element has index of 3:

console.log(jumbledNums[3]); // Output: 5

/*
Great, the element in index 3 is the number 5. This makes sense since 5 is the first element that is less than 10.

If there isn’t a single element in the array that satisfies the condition in the callback, then .findIndex() will return -1.
*/

const greaterThan1000 = jumbledNums.findIndex(num => {
  return num > 1000;
});

console.log(greaterThan1000); // Output: -1

const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal = animals.findIndex(animal =>{
  return animal === 'elephant';
});

console.log(foundAnimal);

const startsWithS = animals.findIndex(start =>{
  return start[0] === 's' ? true : false;
});

console.log(startsWithS)

// The .reduce() Method //

//Another widely used iteration method is .reduce(). The .reduce() method returns a single value after iterating through the elements of an array, thereby reducing the array. Take a look at the example below:

const numbers = [1, 2, 4, 10];

const summedNums = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue
})

console.log(summedNums) // Output: 17

/*
Iteration accumulator CurrentValue return value
First     1            2           3
Second    3            4           7
Third     7            10          17

Now let’s go over the use of .reduce() from the example above:

numbers is an array that contains numbers.

summedNums is a variable that stores the returned value of invoking .reduce() on numbers.

numbers.reduce() calls the .reduce() method on the numbers array and takes in a callback function as argument.

The callback function has two parameters, accumulator and currentValue. The value of accumulator starts off as the value of the first element in the array and the currentValue starts as the second element. To see the value of accumulator and currentValue change, review the chart above.

As .reduce() iterates through the array, the return value of the callback function becomes the accumulator value for the next iteration, currentValue takes on the value of the current element in the looping process.

The .reduce() method can also take an optional second parameter to set an initial value for accumulator (remember, the first argument is the callback function!). For instance:
*/

const numbers = [1, 2, 4, 10];

const summedNums = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue
}, 100)  // <- Second argument for .reduce()

console.log(summedNums); // Output: 117

/*
Iteration accumulator CurrentValue return value
First     100          1           101
Second    101          2           103
Third     103          4           107
Fourth    107          10          117
*/

const newNumbers = [1, 3, 5, 7];

const newSum = newNumbers.reduce((accumulator, currentValue) => {
  console.log('The value of accumulator: ', accumulator);
  console.log('The value of currentValue: ', currentValue);
  return accumulator + currentValue;
} );//by adding 10 after the curly bracket the accumlater will start at 10

console.log(newSum);

// Review // 

/*
.forEach() is used to execute the same code on every element in an array but does not change the array and returns undefined.

.map() executes the same code on every element in an array and returns a new array with the updated elements.

.filter() checks every element in an array to see if it meets certain criteria and returns a new array with the elements that return truthy for the criteria.

.findIndex() returns the index of the first element of an array that satisfies a condition in the callback function. It returns -1 if none of the elements in the array satisfies the condition.

.reduce() iterates through an array and takes the values of the elements and returns a single value.

All iterator methods take a callback function, which can be a pre-defined function, a function expression, or an arrow function.

You can visit the Mozilla Developer Network to learn more about iterator methods (and all other parts of JavaScript!).
*/