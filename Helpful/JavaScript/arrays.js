/*
Arrays

Organizing and storing data is a foundational concept of programming.

One way we organize data in real life is by making lists. Let’s make one here:

New Year's Resolutions:

1. Keep a journal 
2. Take a falconry class
3. Learn to juggle

Let’s now write this list in JavaScript, as an array: 
*/

let newYearsResolutions = ['Keep a journal', 'Take a falconry class', 'Learn to juggle'];

/*
Arrays are JavaScript’s way of making lists. Arrays can store any (including , numbers, and booleans). Like lists, arrays are ordered, meaning each item has a numbered position.

Here’s an array of the concepts we’ll cover:
*/

let concepts = ['creating arrays', 'array structures', 'array manipulation'];

// Create an Array

//One way we can create an array is to use an array literal. An array literal creates an array by wrapping items in square brackets [].

/*
The array is represented by the square brackets [] and the content inside.
Each content item inside an array is called an element.
There are three different elements inside the array.
Each element inside the array is a different data type.
We can also save an array to a variable. You may have noticed we did this in the previous exercise:

let newYearsResolutions = ['Keep a journal', 'Take a falconry class', 'Learn to juggle'];
*/

// Accessing Elements

/*
Each element in an array has a numbered position known as its index. We can access individual items using their index, which is similar to referencing an item in a list based on the item’s position.

Arrays in JavaScript are zero-indexed, meaning the positions start counting from 0 rather than 1. Therefore, the first item in an array will be at position 0
*/

const famousSayings = ['Fortune favors the brave.', 'A joke is a very serious thing.', 'Where there is love there is life.'];

const listItem = famousSayings

console.log(famousSayings[0]);//first one
console.log(famousSayings[2]);//third one
console.log(famousSayings[3]); //undefined

//Update Elements

//In the previous exercise, you learned how to access elements inside an array or a string by using an index. Once you have access to an element in an array, you can update its value.

let seasons = ['Winter', 'Spring', 'Summer', 'Fall'];

seasons[3] = 'Autumn';
console.log(seasons); 
//Output: ['Winter', 'Spring', 'Summer', 'Autumn']

/*
In the example above, the seasons array contained the names of the four seasons.

However, we decided that we preferred to say 'Autumn' instead of 'Fall'.

The line, seasons[3] = 'Autumn'; tells our program to change the item at index 3 of the seasons array to be 'Autumn' instead of what is already there.
*/

//Arrays with let and const

/*
You may recall that you can declare with both the let and const keywords. Variables declared with let can be reassigned.

Variables declared with the const keyword cannot be reassigned. However, elements in an array declared with const remain mutable. Meaning that we can change the contents of a const array, but cannot reassign a new array or a different value.
*/

let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

condiments[0] = 'Mayo';

console.log(condiments);

condiments = ['Mayo']

console.log(condiments);

utensils[3] = 'Spoon';

console.log(utensils);

//The .length property

/*
One of an array’s built-in properties is length and it returns the number of items in the array. We access the 
Preview: Docs Loading link description
.length
 property just like we do with strings. Check the example below:
 */

 const newYearsResolutions = ['Keep a journal', 'Take a falconry class'];

console.log(newYearsResolutions.length);
// Output: 2

//The .push() Method

/*
These methods are specifically called on arrays to make common tasks, like adding and removing elements, more straightforward.

One method, 
Preview: Docs Adds one or more elements to the end of the array and returns the new length.
.push(),
 allows us to add items to the end of an array. Here is an example of how this is used:
 */

 const itemTracker = ['item 0', 'item 1', 'item 2'];

itemTracker.push('item 3', 'item 4');

console.log(itemTracker); 
// Output: ['item 0', 'item 1', 'item 2', 'item 3', 'item 4'];

/*
So, how does .push() work?

We access the push method by using dot notation, connecting push to itemTracker with a period.
Then we call it like a function. That’s because .push() is a function and one that JavaScript allows us to use right on an array.

.push() can take a single argument or multiple arguments separated by commas. In this case, we’re adding two elements: 'item 3' and 'item 4' to itemTracker.

Notice that .push() changes, or mutates, itemTracker. You might also see .push() referred to as a destructive array method since it changes the initial array.
If you’re looking for a method that will mutate an array by adding elements to it, then .push() is the method for you!
*/

//The .pop() Method

//Another array method, .pop(), removes the last item of an array.

const newItemTracker = ['item 0', 'item 1', 'item 2'];

const removed = newItemTracker.pop();

console.log(newItemTracker); 
// Output: [ 'item 0', 'item 1' ]
console.log(removed);
// Output: item 2

//More Array Methods

/*
There are many more array 
Preview: Docs Methods are object properties that contain functions. methods than just .push() and . You can read about these array methods on the Docs entry for JavaScript Arrays.

.pop() and .push() mutate the array on which they’re called. However, there are times that we don’t want to mutate the original array and we can use non-mutating array methods. Be sure to check the Docs to understand the behavior of the method you are using.

Some arrays methods that are available to JavaScript developers include: .join(), .slice(), .splice(), .shift(), .unshift(), and .concat() amongst many others. Using these built-in methods makes it easier to do some common tasks when working with arrays.
*/

const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

groceryList.shift();

//console.log(groceryList);//removes first item

groceryList.unshift('popcorn');

//console.log(groceryList);//adds popcorn as first item

//console.log(groceryList.slice(1, 4));
//console.log(groceryList); //Notice that the groceryList array still contains the same items it had in Step 2. That means .slice() is non-mutating! You can confirm this in the link in the previous step.

groceryList.indexOf('pasta')

const pastaIndex = groceryList.indexOf('pasta');

console.log(pastaIndex);

console.log(groceryList);

//Arrays and Functions 

/*
Throughout the lesson we went over arrays being mutable, or changeable. Well what happens if we try to change an array inside a function? Does the array keep the change after the function call or is it scoped to inside the function?

Take a look at the following example where we call on an array inside a function. Recall, the .push() method mutates, or changes, an array:
 */

const flowers = ['peony', 'daffodil', 'marigold'];

function addFlower(arr) {
  arr.push('lily');
}

addFlower(flowers);

console.log(flowers); // Output: ['peony', 'daffodil', 'marigold', 'lily']

/*
The flowers array that has 3 elements.

The function addFlower() has a parameter of arr uses .push() to add a 'lily' element into arr.

We call addFlower() with an argument of flowers which will execute the code inside addFlower.

We check the value of flowers and it now includes the 'lily' element! The array was mutated!

So when you pass an array into a function, if the array is mutated inside the function, that change will be maintained outside the function as well. You might also see this concept explained as pass-by-reference since what we’re actually passing to the function is a reference to where the variable memory is stored and changing the memory.
*/

const concept = ['arrays', 'can', 'be', 'mutated'];

function changeArr(arr){
  arr[3] = 'MUTATED';
}

changeArr(concept);

console.log(concept);

function removeElement (newArr){
  newArr.pop()
}

removeElement(concept);
console.log(concept);

//Nested Arrays

const nestedArr = [[1], [2, 3]];

//To access the nested arrays we can use bracket notation with the index value, just like we did to access any other element:

const nestedArr = [[1], [2, 3]];

console.log(nestedArr[1]); // Output: [2, 3]

//Notice that nestedArr[1] will grab the element in index 1 which is the array [2, 3]. Then, if we wanted to access the elements within the nested array we can chain, or add on, more bracket notation with index values.

const nestedArr = [[1], [2, 3]];

console.log(nestedArr[1]); // Output: [2, 3]
console.log(nestedArr[1][0]); // Output: 2

//In the second console.log() statement, we have two bracket notations chained to nestedArr. We know that nestedArr[1] is the array [2, 3]. Then to grab the first element from that array, we use nestedArr[1][0] and we get the value of 2.

const numberClusters = [[1,2],[3,4],[5,6]]

const target = numberClusters[2][1]

console.log(target);//6