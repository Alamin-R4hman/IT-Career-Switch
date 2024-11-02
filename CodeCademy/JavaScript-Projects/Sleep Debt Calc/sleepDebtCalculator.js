/*
The first problem to solve is determining how many hours of sleep you got each night of the week.

You can create a function that returns any given night’s number of hours of rest. Instead of writing seven different functions (one for each day of the week), let’s write one function with a parameter for the day.

Create a function named getSleepHours with a single parameter named day.


The function should accept a day as an argument and return the number of hours you slept that night.

For instance, if you got 8 hours of sleep on Monday night, calling getSleepHours('monday') should return 8.

Use an if/else or switch statement to implement this.
*/

const getSleepHours = day => {
  switch(day) {
    case 'monday':
      return 8
      break;
    case 'tuesday':
      return 5
      break;
    case 'wednesday':
      return 4
      break;
    case 'thursday':
      return 8
      break;
    case 'friday':
      return 10
      break;
    case 'saturday':
      return 2
      break;
    case 'sunday':
      return 3
      break;
    default:
      return 'Pick a day';

  }
}

/*Another way of writing the code above is with the if-else statement:

const getSleepHours = day => {
 day = day.toLowerCase(); <--- This will make any answer given in day lowercase to prevent errors with capitalisations
 
 if (day === 'monday') {
 return '8'
 }
  else if(day === 'tuesday') {
  return '5'
  }
  else if(day === 'wednesday') {
  return '5'
  }
  else if(day === 'thursday') {
  return '7'
  }
  else if(day === 'friday') {
  return '7'
  }
  else if(day === 'saturday') {
  return '7'
  }
  else if(day === 'sunday') {
  return '7'
  }
  else {return 'pick a day';
  }
}

*/

/*
Now that you’ve written a function to get the sleep hours for each night, we need to do three things:

Get the total sleep hours that you actually slept
Get the ideal sleep hours that you prefer
Calculate the sleep debt, if any.
To get the total sleep hours that you actually slept, create a new function named getActualSleepHours that takes no parameters.
*/

const getActualSleepHours = () => {
  
}

//Inside the getActualSleepHours() function, call the getSleepHours() function for each day of the week. Add the results together and return the sum using an implicit return.

const getActualSleepHours = () => {
  getSleepHours('monday') + 
  getSleepHours('tuesday') + 
  getSleepHours('wednesday') + 
  getSleepHours('thursday') + 
  getSleepHours('friday') + 
  getSleepHours('saturday') + 
  getSleepHours('sunday');  
}

 //console.log(getSleepHours('monday'));
 // console.log(getActualSleepHours());

 /*
 To get the ideal sleep hours that you prefer, create a function named getIdealSleepHours with no parameters.

Inside the function, declare a variable named idealHours and set its value to your ideal hours per night. Then return the idealHours multiplied by 7.

You’ll want to multiply by 7 to get the total hours you prefer per week.
*/

const getIdealSleepHours = () => {
  let idealHours = 7;
  return idealHours * 7;
};

//Test your two new functions by calling them and printing the results to the console. You can remove the tests when you know your functions works.

//console.log(getIdealSleepHours());
//console.log(getActualSleepHours());

/*

Now that you can get the actual sleep hours and the ideal sleep hours, it’s time to calculate sleep debt.

Create a function named calculateSleepDebt with no parameters.

Inside of its block, create a variable named actualSleepHours set equal to the getActualSleepHours() function call.

Then, create another variable named idealSleepHours, set equal to the getIdealSleepHours() function call.

9.
Now that you have actualSleepHours and idealSleepHours, you can write a few if/else statements to output the result to the console. The function should fulfill this logic:

If actual sleep equals ideal sleep, log to the console that the user got the perfect amount of sleep.
If the actual sleep is greater than the ideal sleep, log to the console that the user got more sleep than needed.
If the actual sleep is less than the ideal sleep, log to the console that the user should get some rest.
*/

const calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours();

  if (actualSleepHours === idealSleepHours ) {
    console.log('the user got the perfect amount of sleep.')
  } 
  else if (actualSleepHours > idealSleepHours) {
    console.log('the user got ' + (idealSleepHours - actualSleepHours) + ' hours more sleep than needed.')
  }
  else if (actualSleepHours < idealSleepHours) {
    console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hours sleep less than needed. You need to rest now!')
  }
  else {console.log('Error, check code please')};
}

//To make this calculator more helpful, add the hours the user is over or under their ideal sleep in each log statement in calculateSleepDebt().

calculateSleepDebt();

/*
For extra practice, try these:

getActualSleepHours() could be implemented without calling getSleepHours(). Use literal numbers and the + operator to rewrite getActualSleepHours(). It should still return the total actual hours slept in the week.

Put the daily sleep hours directly into getActualSleepHours().

const getActualSleepHours = () => 6 + 7 + 9 + 8 + 5 + 10 + 11;
*/

/*
Some people need to sleep longer than others. Rewrite getIdealSleepHours() so that you can pass it an argument, like getIdealSleepHours(8) where 8 is the ideal hours per night. Update the call to getIdealSleepHours() in calculateSleepDebt() too.

Make idealHours a parameter and multiply it by 7.

const getIdealSleepHours = idealHours => idealHours * 7;

When you call the updated function in calculateSleepDebt(), call it like this:


const calculateSleepDebt = () => {
  ...

  const idealSleepHours = getIdealSleepHours(8);
  
  ...
};
*/

