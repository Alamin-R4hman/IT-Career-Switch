//Error Stack Traces

https://content.codecademy.com/courses/updated_images/JavaScript%2BError%2BDiagram_Updated_1.svg

//Reading Error Stack Traces

/*
Using this stack trace, let’s answer three questions you should ask yourself every time you want to debug an error:

In what line did the error occur? You can almost always find this information on the first line of the stack trace in the following format <file path>/<file name>:<line number>. In this example, the location is app.js:1. This means that the error was thrown in the file named app.js on line 1.
What type of error was thrown? The first word on the fifth line of the stack trace is the type of error that was thrown. In this case, the type of error was ReferenceError. We will discuss this error type in the next exercise.
What is the error message? The rest of the fifth line after the error type provides an error message, describing what went wrong. In this case, the description is myVariable is not defined.

/home/ccuser/workspace/learn-javascript-debugging-code/script.js:5
if (numberSum > total;) {
                     ^
            
SyntaxError: Unexpected token ;

------------------------------------------------------------------

From what file was this error thrown?
1 - Answer: script.js
On what line of that file was this error thrown?
2 - Answer: 5
What type of error was thrown in this stack trace?
3 - Answer: Syntax Error
What is the description of the error in this stack trace?
4 - Answer:  Unexpected token
*/

//Different Types of Errors //

/*

SyntaxError: This error will be thrown when a typo creates invalid code — code that cannot be interpreted by the compiler. When this error is thrown, scan your code to make sure you properly opened and closed all brackets, braces, and parentheses and that you didn’t include any invalid semicolons.
ReferenceError: This error will be thrown if you try to use a variable that does not exist. When this error is thrown, make sure all variables are properly declared.
TypeError: This error will be thrown if you attempt to perform an operation on a value of the wrong type. For example, if we tried to use a string method on a number, it would throw a TypeError.

*/

//Debugging Errors

/*
Here’s a process for efficiently working through your code’s errors
one by one:

Run your code. Using the first error’s stack trace, identify the error’s type, description, and location.
Go to the file name and line number indicated by the error stack trace. Using the error type and description, identify the bug in your code.
Fix the bug and re-run your code.
Repeat steps 1-3 until your code no longer throws any errors.
*/

//Debugging with console.log() //

/*
Let’s synthesize our workflow from the previous exercise into a reusable set of debugging steps.

Go to the beginning of the malfunctioning code. Print out all starting  variables, existing values, and arguments using console.log(). If the values are what you expect, move on to the next piece of logic in the code. If not, you have identified a bug and should skip to step 3.
After the next piece of logic in your code, add console.log() 
statements to ensure updated variables have the values that you now expect and that the block of code is being executed. If that logic is executing properly, continue repeating this step until you find a line not working as expected, then move to step 3.
Fix the identified bug and run your code again. If it now works as expected, you’ve finished debugging! If not, continue stepping through your code using step 2 until it does.
*/

// Returns the string whose first letter is later in the alphabet. If both first letters are equal, returns null.
function getLaterFirstLetter(string1, string2) {
  const firstLetter1 = string1.charAt(0);
  const firstLetter2 = string2.charAt(0);
  
  if (firstLetter1 === firstLetter2) {
    return null;
  } else if (firstLetter1 < firstLetter2) {
    return string2;
  } else {
    return string1;
  }
}

// Should return "blueberry"
console.log("getLaterFirstLetter('avocado', 'blueberry') returns: " + getLaterFirstLetter('avocado', 'blueberry'));

// Should return "zebra"
console.log("getLaterFirstLetter('zebra', 'aardvark') returns : " + getLaterFirstLetter('zebra', 'aardvark'));

// Should return null
console.log("getLaterFirstLetter('astro', 'afar') returns: " + getLaterFirstLetter('astro', 'afar'));

// Use Google to help you find out information you may be looking for.

//Stack Oveflow 

// Returns whether or not the provided string contains a substring of "cake" in it.
function containsCake(string) {
  return string.includes('cake');
}

// Should return true
console.log("containsCake('I think cake is my soul mate.') returns: " + containsCake('I think cake is my soul mate.'));

// Should return false
console.log("containsCake('Pie is certainly the coolest dessert.') returns: " + containsCake('Pie is certainly the coolest dessert.'));

https://stackoverflow.com/questions/51165/how-to-sort-strings-in-javascript