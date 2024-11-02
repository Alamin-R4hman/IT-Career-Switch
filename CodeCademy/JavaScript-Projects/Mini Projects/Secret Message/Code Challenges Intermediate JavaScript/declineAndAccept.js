// declineEverything() and acceptEverything() //

const veggies = ['broccoli', 'spinach', 'cauliflower', 'broccoflower'];

const politelyDecline = (veg) => {
      console.log('No ' + veg + ' please. I will have pizza with extra cheese.');
}

const declineEverything = arr => {
  arr.forEach(politelyDecline)
}

const acceptEverything = arr => {
  arr.forEach(e => {
    console.log(`Ok, I guess I will eat some ${e}.`)
  })
}
console.log(declineEverything(veggies))// this will print undefined at the end.  Since declineEverything doesn’t return a value, console.log outputs undefined.
declineEverything(veggies); // this will just print the decline message without undefined 

/*
// As a function declaration:
function declineEverything(arr) {
      arr.forEach(politelyDecline)
}

Using a named function and string concatenation:
const grudginglyAccept = veg => {
      console.log('Ok, I guess I will eat some ' + veg + '.');
}
const acceptEverything = arr => {
      arr.forEach(grudginglyAccept)
}

// Using a loop:
const acceptEverything = arr => {
 for(let i = 0; i<arr.length; i++){
    console.log(`Ok, I guess I will eat some ${arr[i]}.`)
 }
}
*/

/*
Array of Vegetables:

const veggies = ['broccoli', 'spinach', 'cauliflower', 'broccoflower'];

This is an array named veggies containing four types of vegetables.
Function politelyDecline:

const politelyDecline = (veg) => {
  console.log('No ' + veg + ' please. I will have pizza with extra cheese.');
}

This function takes a vegetable (veg) as an argument.
It logs a message to the console, politely declining the vegetable.
Function declineEverything:

const declineEverything = arr => {
  arr.forEach(politelyDecline);
}

This function takes an array (arr) as an argument.
It uses .forEach() to apply the politelyDecline function to each element in the array.
For each vegetable in the array, it logs a decline message.
Function acceptEverything:

const acceptEverything = arr => {
  arr.forEach(e => {
    console.log(`Ok, I guess I will eat some ${e}.`);
  });
}

This function also takes an array (arr) as an argument.
It uses .forEach() to iterate over each element in the array.
For each vegetable, it logs a message accepting it.
Calling declineEverything:

declineEverything(veggies);
*/

