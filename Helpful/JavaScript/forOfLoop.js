//for loop vs for…of loop

//Here is an example of iterating over each element in an array using a traditional for loop with an index variable:

const hobbies = ['singing', 'eating', 'quidditch', 'writing'];
 
for (let i = 0; i < hobbies.length; i++) {
  console.log(`I enjoy ${hobbies[i]}.`);
}

//And here is an example of iterating through the same array using a for...of loop:

const hobbies = ['singing', 'eating', 'quidditch', 'writing'];
 
for (const hobby of hobbies) {
  console.log(`I enjoy ${hobby}.`);
}

//Both examples print out the same thing:

//I enjoy singing.
//I enjoy eating.
//I enjoy quidditch.
//I enjoy writing.

//Notice how the for...of loop has a simpler syntax which can be beneficial for code readability, especially in larger and more complex applications.

/* Iterating Through an Array

One of the primary uses of the for...of loop is iterating through the items of an array. Let’s breakdown the syntax with a new example:
*/

const fruits = ['oranges', 'apples', 'grapes'];
 
for (const fruit of fruits) {
  console.log(fruit);
}

/*
Which prints out:

oranges
apples
grapes

Let’s break down the example:

In our code snippet, we have fruits, which is the array we want to iterate over.

We set up our for...of loop: for (const fruit of fruits). This specifies that we will iterate through the array (fruits) for each item (fruit) in the array.

The variable fruit is assigned a different value on each iteration of the loop. The variable may be declared with the keywords: const, let, or var. You can name the variable anything but it is helpful to use a name related to the iterable object. In the example, notice the placeholder variable uses the singular form of a plural array, fruit of fruits. Here are some other examples: person of a people array, puppy of a puppies array, etc.

For each item in the array, we print the value to the console.

The loop will start with the first element of the array and stop on the last element.

There is no need to set up additional variables to store an index with a for...of loop. The loop will iterate over each element in the iterable object and terminate itself when it reaches the last item — so you don’t need to track the number of items in the array. In our example, we used an array, but for...of loops also work with strings, sets, and other array-like objects.

Therefore, you should opt for a standard for loop if you need to access the indices or need finer control to determine what elements you want to loop over.
*/

/* Iterating Through a String

The for...of can also be used to iterate over strings. Here is an example:
*/

const username = 'joe';
 
for (const char of username) {
  console.log(char);
}


/*
Which prints out:

j
o
e

Notice the similarities between iterating through a string and iterating through an array. The for...of loop does not change in structure regardless of the iterable object used.
*/

/* Break and Continue

for...of has the advantage of setting up most of your loop parameters for you, but sometimes it is necessary to reclaim some control of how iteration is managed. One way of doing this is using JavaScript’s break and continue statements.

The break statement can be used to jump out of a loop. For example:
*/

const strangeBirds = ['Shoebill', 'Cockatrice', 'Basan', 'Terrorbird','Parotia','Kakapo'];
 
for (const bird of strangeBirds) {
  if (bird === 'Basan'){ 
    break; 
  }
  console.log(bird);
}

/*
Will iterate through the array until it encounters the great mythical Basan, then it will exit. This will print out:

Shoebill
Cockatrice

The continue statement is used to skip one iteration of the loop. For example:
*/

const strangeBirds = ['Shoebill', 'Cockatrice', 'Basan', 'Cow', 'Terrorbird', 'Parotia', 'Kakapo'];
 
for (const bird of strangeBirds) {
  if  (bird === 'Cow'){
    continue;
  }
  console.log(bird);
}

/*
Will iterate through the array and print out every value except the suspected imposter:

Shoebill
Cockatrice
Basan
Terrorbird
Parotia
Kakapo
*/

/* Use Case: for loop vs for…of loop

You might now be wondering, why use a for loop at all if a for...of loop is so much simpler? Well, the for...of loop is not a complete replacement for the for loop. Take a look at the following code snippet:
*/

const nums = [1, 2, 3];

for (let i = nums.length - 1; i >= 0; i--) {
  console.log(nums[i]);
}

console.log('Time is up!');

/*
Which prints:

3
2
1
Time is up! 

In the example above, we iterated through an array in reverse! You would not be able to use a for...of loop to do the same thing. However, with a regular for loop, you have access to indices of the elements, determine a stopping condition, and the ability to set a counter. Keep these factors in mind when deciding what loop is right for your circumstance.
*/
