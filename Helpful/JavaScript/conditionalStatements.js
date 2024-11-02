<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>

  /* If statement */ 

    if (true) {
  console.log('This message will print!'); // Prints: This message will print!
  }

  /*Notice in the example above, we have an if statement. The if statement is composed of:

  The if keyword followed by a set of parentheses () which is followed by a code block, or block statement, indicated by a set of curly braces {}.
  Inside the parentheses (), a condition is provided that evaluates to true or false.
  If the condition evaluates to true, the code inside the curly braces {} runs, or executes.
  If the condition evaluates to false, the block won’t execute.*/

  /* If-Else statement */


  if (false) {
    console.log('The code in this block will not run.');
  } else {
    console.log('But the code in this block will!');
  }

  /* Prints: But the code in this block will! */

  /*An else statement must be paired with an if statement, and together they are referred to as an if...else statement.

  In the example above, the else statement:
  
  Uses the else keyword following the code block of an if statement.
  Has a code block that is wrapped by a set of curly braces {}.
  The code inside the else statement code block will execute when the if statement’s condition evaluates to false.
  if...else statements allow us to automate solutions to yes-or-no questions, also known as binary decisions.*/

  /* Comparison Operators */

  /*
  Here is a list of some handy comparison operators and their syntax:

  Less than: <
  Greater than: >
  Less than or equal to: <=
  Greater than or equal to: >=
  Is equal to: ==
  Is strictly equal to: ===
  Is not equal to: !==
  Comparison operators compare the value on the left with the value on the right.

  It can be helpful to think of comparison statements as questions. When the answer is “yes”, the statement evaluates to true, and when the answer is “no”, the statement evaluates to false. The code above would be asking: is 10 less than 12? Yes! So 10 < 12 evaluates to true.
  */

  /* Logical Operators */
  
  /* 
  There are three logical operators:

  the and operator (&&)
  the or operator (||)
  the not operator, otherwise known as the bang operator (!)
  */

  /*When we use the && operator, we are checking that two things are true:*/

    if (stopLight === 'green' && pedestrians === 0) {
    console.log('Go!');
  } else {
    console.log('Stop');
  }

  /*When using the && operator, both conditions must evaluate to true for the entire condition to evaluate to true and execute.*/

  /* If we only care about either condition being true, we can use the || operator: */

  if (day === 'Saturday' || day === 'Sunday') {
    console.log('Enjoy the weekend!');
  } else {
    console.log('Do some work.');
  }

  /*When using the || operator, only one of the conditions must evaluate to true for the overall statement to evaluate to true. In the code example above, if either day === 'Saturday' or day === 'Sunday' evaluates to true the if‘s condition will evaluate to true and its code block will execute.*/

  /*The ! not operator reverses, or negates, the value of a boolean:*/

    let excited = true;
    console.log(!excited); // Prints false

    let sleepy = false;
    console.log(!sleepy); // Prints true

  /*let excited = true;
  console.log(!excited); // Prints false

  let sleepy = false;
  console.log(!sleepy); // Prints true*/

  /* Truthy and Falsy */

  
    let myVariable = 'I Exist!';

    if (myVariable) {
      console.log(myVariable)
    } else {
      console.log('The variable does not exist.')
    }
  

  /* The code block in the if statement will run because myVariable has a truthy value; even though the value of myVariable is not explicitly the value true, when used in a boolean or conditional context, it evaluates to true because it has been assigned a non-falsy value.

  So which values are falsy— or evaluate to false when checked as a condition? The list of falsy values includes:

  0
  Empty strings like "" or ''
  null which represent when there is no value at all
  undefined which represent when a declared variable lacks a value
  NaN, or Not a Number 
  
  Here’s an example with numbers:
  */

  
    let numberOfApples = 0;

    if (numberOfApples){
      console.log('Let us eat apples!');
    } else {
      console.log('No apples left!'); 
    }; //Prints 'No apples left!'  

  

  /*The condition evaluates to false because the value of the numberOfApples is 0. Since 0 is a falsy value, the code block in the else statement will run.*/

  /* Truthy and Falsy Assignment */

  /*Truthy and falsy evaluations open a world of short-hand possibilities! Say you have a website and want to take a user’s username to make a personalized greeting. Sometimes, the user does not have an account, making the username variable falsy. The code below checks if username is defined and assigns a default string if it is not:*/

 
    let username = '';
    let defaultName;

    if (username) {
      defaultName = username;
    } else {
      defaultName = 'Stranger';
    }

    console.log(defaultName); // Prints: Stranger
  

  /*Initially, defaultName is declared without a value. The if statement checks if username is truthy. Since username is an empty string (falsy), the else block runs, assigning 'Stranger' to defaultName. Thus, defaultName gets its value during the execution of the if-else statement.
  
  In the code defaultName = username;, defaultName is assigned the value of username only if username is truthy. Since username is an empty string (which is falsy), this line does not execute. Instead, the else block assigns 'Stranger' to defaultName.
  */

  /* If you combine your knowledge of logical operators
 you can use a short-hand for the code above. In a boolean condition, JavaScript assigns the truthy value to a variable if you use the || operator in your assignment: */

 let username = '';
    let defaultName = username || 'Stranger';

    console.log(defaultName); // Prints: Stranger
  

  /*Because || or statements check the left-hand condition first, the variable defaultName will be assigned the actual value of username if it is truthy, and it will be assigned the value of 'Stranger' if username is falsy. This concept is also referred to as short-circuit evaluation.

  The selected code sets the defaultName variable by using the || operator. It assigns defaultName the value of username if username is truthy. Otherwise, it assigns 'Stranger'. Since username is an empty string (falsy), defaultName becomes 'Stranger', which is then logged.
  */

  /* Ternary Operator */

    let isNightTime = true;

    if (isNightTime) {
      console.log('Turn on the lights!');
    } else {
      console.log('Turn off the lights!');
  }

  /* We can use a ternary operator to perform the same functionality as if-else: */


    isNightTime ? console.log('Turn on the lights!') : console.log('Turn off the lights!');


  /*In the example above:

  The condition, isNightTime, is provided before the ?.
  Two expressions follow the ? and are separated by a colon :.
  If the condition evaluates to true, the first expression executes.
  If the condition evaluates to false, the second expression executes.
  Like if...else statements, ternary operators can be used for conditions which evaluate to true or false.*/

  /* Else If statments */

  /*
  We can add more conditions to our if...else with an else if statement.
  
  The else if statement allows for more than two possible outcomes. You can add as many else if statements as you’d like, to make more complex conditionals!

  The else if statement always comes after the if statement and before the else statement. The else if statement also takes a condition. Let’s take a look at the syntax:
  */

    let stopLight = 'yellow';

    if (stopLight === 'red') {
      console.log('Stop!');
    } else if (stopLight === 'yellow') {
      console.log('Slow down.');
    } else if (stopLight === 'green') {
      console.log('Go!');
    } else {
      console.log('Caution, unknown!');
    }

  

  /*The else if statements allow you to have multiple possible outcomes. if/else if/else statements are read from top to bottom, so the first condition that evaluates to true from the top to bottom is the block that gets executed.
  
  In the example above, since stopLight === 'red' evaluates to false and stopLight === 'yellow' evaluates to true, the code inside the first else if statement is executed. The rest of the conditions are not evaluated. If none of the conditions evaluated to true, then the code in the else statement would have executed.*/

  /*The switch keyword*/

  /*A switch statement provides an alternative syntax that is easier to read and write. A switch statement looks like this:*/

  let groceryItem = 'papaya';

    switch (groceryItem) {
      case 'tomato':
        console.log('Tomatoes are $0.49');
        break;
      case 'lime':
        console.log('Limes are $1.49');
        break;
      case 'papaya':
        console.log('Papayas are $1.29');
        break;
      default:
        console.log('Invalid item');
        break;
    }

    // Prints 'Papayas are $1.29'

  /*
  The switch keyword initiates the statement and is followed by ( ... ), which contains the value that each case will compare. In the example, the value or expression of the switch statement is groceryItem.
  
  Inside the block, { ... }, there are multiple cases. The case keyword checks if the expression matches the specified value that comes after it. The value following the first case is 'tomato'. If the value of groceryItem equalled 'tomato', that case‘s console.log() would run.
  
  The value of groceryItem is 'papaya', so the third case runs— Papayas are $1.29 is logged to the console.
  The break keyword tells the computer to exit the block and not execute any more code or check any other cases inside the code block. Note: Without break keywords, the first matching case will run, but so will every subsequent case regardless of whether or not it matches—including the default. This behavior is different from if/else conditional statements that execute only one block of code.
  
  At the end of each switch statement, there is a default statement. If none of the cases are true, then the code in the default statement will run.
  */

  /* Task */

let eightBall = '';

if (randomNumber === 0) {
  eightBall = 'It is certain';
} else if (randomNumber === 1) {
  eightBall = 'It is decidedly so';
} else if (randomNumber === 2) {
  eightBall = 'Reply hazy try again';
} else if (randomNumber === 3) {
  eightBall = 'Cannot predict now';
} else if (randomNumber === 4) {
  eightBall = 'Do not count on it';
} else if (randomNumber === 5) {
  eightBall = 'My sources say no';
} else if (randomNumber === 6) {
  eightBall = 'My sources say no';
} else if (randomNumber === 7) {
  eightBall = 'Outlook not so good';
} else if (randomNumber === 8) {
  eightBall = 'Signs point to yes';
} else {
  eightBall = 'I dont want to answer your questions';
}

console.log(eightBall);

switch (randomNumber) {
  case 0:
  console.log('It is certain');
  break;
  case 1:
  console.log('It is decidedly so');
  break;
  case 2:
  console.log('Reply hazy try again');
  break;
  case 3:
  console.log('Cannot predict now');
  break;
  case 4:
  console.log('Do not count on it');
  break;
  case 5:
  console.log('My sources say no');
  break;
  case 6:
  console.log('My sources say no');
  break;
  case 7:
  console.log('Outlook not so good');
  break;
  case 8:
  console.log('Signs point to yes');
  break;
  default:
  console.log('I dont want to answer your questions');
  break;
}
  
</body>
</html>