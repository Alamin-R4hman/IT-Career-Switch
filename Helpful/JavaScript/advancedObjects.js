//Remember, objects in JavaScript are containers that store data and functionality.

// The this Keyword //

//Objects are collections of related data and functionality. We store that functionality in methids on our objects:

const goat = {
  dietType: 'herbivore',
  makeSound() {
    console.log('baaa');
  }
};


//In our goat object we have a .makeSound() method. We can invoke the .makeSound() method on goat.

goat.makeSound(); // Prints baaa

const goat = {
  dietType: 'herbivore',
  makeSound() {
    console.log('baaa');
  },
  diet() {
    console.log(dietType);
  }
};
goat.diet(); 
// Output will be "ReferenceError: dietType is not defined"

//Here’s where the this keyword comes to the rescue. If we change the .diet() method to use the this, the .diet() works! :

const goat = {
  dietType: 'herbivore',
  makeSound() {
    console.log('baaa');
  },
  diet() {
    console.log(this.dietType);
  }
};

goat.diet(); 
// Output: herbivore

//The this keyword references the calling object which provides access to the calling object’s properties. In the example above, the calling object is goat and by using this we’re accessing the goat object itself, and then the dietType property of goat by using property dot notation.

//Task 

const robot = {
  model: '1E78V2',
  energyLevel: 100,
  provideInfo() {
    return `I am ${this.model} and my current energy level is ${this.energyLevel}.  `
  }
};

console.log(robot.provideInfo());

// Arrow Functions and this //

//Arrow functions inherently bind, or tie, an already defined this value to the function itself that is NOT the calling object. In the code snippet above, the value of this is the global object, or an object that exists in the global scope, which doesn’t have a dietType property and therefore returns undefined. The key takeaway from the example is to avoid using arrow functions when using this in a method!

// Privacy //

//When discussing privacy in objects, we define it as the idea that only certain properties should be mutable or able to change in value. Certain languages have privacy built-in for objects, but JavaScript does not have this feature. Rather, JavaScript developers follow naming conventions that signal to other developers how to interact with a property. One common convention is to place an underscore _ before the name of a property to mean that the property should not be altered.

const robot = {
  _energyLevel: 100,
  recharge(){
    this._energyLevel += 30;
    console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`)
  }
};

robot._energyLevel = 'high '

robot.recharge();

// Getters // 

//Getters are methods that get and return the internal properties of an object. But they can do more than just retrieve the value of a property!

const person = {
  _firstName: 'John',
  _lastName: 'Doe',
  get fullName() {
    if (this._firstName && this._lastName){
      return `${this._firstName} ${this._lastName}`;
    } else {
      return 'Missing a first name or a last name.';
    }
  }
}

// To call the getter method: 
person.fullName; // 'John Doe'

/*
Notice that in the getter method above:

We use the get keyword followed by a function.

We use an if...else conditional to check if both _firstName and _lastName exist (by making sure they both return truthy values) and then return a different value depending on the result.

We can access the calling object’s internal properties using this. In fullName, we’re accessing both this._firstName and this._lastName.
In the last line we call fullName on person. In general, getter methods do not need to be called with a set of parentheses. Syntactically, it looks like we’re accessing a property.

Now that we’ve gone over syntax, let’s discuss some notable advantages of using getter methods:

Getters can perform an action on the data when getting a property.

Getters can return different values using conditionals.

In a getter, we can access the properties of the calling object using this.

The functionality of our code is easier for other developers to understand.

Another thing to keep in mind when using getter (and setter) methods is that properties cannot share the same name as the getter/setter function. If we do so, then calling the method will result in an infinite call stack error. One workaround is to add an underscore before the property name like we did in the example above.
*/

//Task ##const robot = {
  _model: '1E78V2',
  _energyLevel: 100,
  get energyLevel () {
    if (typeof this._energyLevel === 'number') {
      return `My current energy level is ${this._energyLevel}`
    } else {
      return 'System malfunction: cannot retrieve energy level'
    }
  }
  
};
console.log(robot.energyLevel);

// Setters //

// we can also create setter methods which reassign values of existing properties within an object. Let’s see an example of a setter method:

const person = {
  _age: 37,
  set age(newAge){
    if (typeof newAge === 'number'){
      this._age = newAge;
    } else {
      console.log('You must assign a number to age');
    }
  }
};

/*
Notice that in the example above:

We can perform a check for what value is being assigned to this._age.

When we use the setter method, only values that are numbers will reassign this._age

There are different outputs depending on what values are used to reassign this._age.

Then to use the setter method:
*/

person.age = 40;
console.log(person._age); // Logs: 40
person.age = '40'; // Logs: You must assign a number to age

//Setter methods like age do not need to be called with a set of parentheses. Syntactically, it looks like we’re reassigning the value of a property.

//in the example above, we can still set ._age directly just like getter:

person._age = 'forty-five'
console.log(person._age); // Prints forty-five

// Factory Functions //

//So far we’ve been creating objects individually, but there are times where we want to create many instances of an object quickly. Here’s where factory functions come in. A factory function is a function that returns an object and can be reused to make multiple object instances. Factory functions can also have parameters allowing us to customize the object that gets returned.

//Let’s say we wanted to create an object to represent monsters in JavaScript. There are many different types of monsters and we could go about making each monster individually but we can also use a factory function to make our lives easier. To achieve this diabolical plan of creating multiple monsters objects, we can use a factory function that has parameters:

const monsterFactory = (name, age, energySource, catchPhrase) => {
  return { 
    name: name,
    age: age, 
    energySource: energySource,
    scare() {
      console.log(catchPhrase);
    } 
  }
};

//In the monsterFactory function above, it has four parameters and returns an object that has the properties: name, age, energySource, and scare(). To make an object that represents a specific monster like a ghost, we can call monsterFactory with the necessary arguments and assign the return value to a variable:

const ghost = monsterFactory('Ghouly', 251, 'ectoplasm', 'BOO!');
ghost.scare(); // 'BOO!'

//Now we have a ghost object as a result of calling monsterFactory() with the needed arguments. With monsterFactory in place, we don’t have to create an object literal every time we need a new monster. Instead, we can invoke the monsterFactory function with the necessary arguments to make a monster for us!

// Property Value Shorthand //

//ES6 introduced some new shortcuts for assigning properties to variables known as destructuring. Here’s a truncated version of the factory function:

const monsterFactory = (name, age) => {
  return { 
    name: name,
    age: age
  }
};

//Imagine if we had to include more properties, that process would quickly become tedious! But we can use a destructuring technique, called property value shorthand, to save ourselves some keystrokes. The example below works exactly like the example above:

const monsterFactory = (name, age) => {
  return { 
    name,
    age 
  }
};

// Destructured Assignment //

//We often want to extract key-value pairs from  objectsand save them as variables . Take for example the following object:

const vampire = {
  name: 'Dracula',
  residence: 'Transylvania',
  preferences: {
    day: 'stay inside',
    night: 'satisfy appetite'
  }
};

//If we wanted to extract the residence property as a variable, we could use the following code:

const residence = vampire.residence; 
console.log(residence); // Prints 'Transylvania' 

//However, we can also take advantage of a destructuring technique called destructured assignment to save ourselves some keystrokes. In destructured assignment we create a variable with the name of an object’s key that is wrapped in curly braces { } and assign to it the object

const { residence } = vampire; 
console.log(residence); // Prints 'Transylvania'

//We can even use destructured assignment to grab nested properties of an object:

const { day } = vampire.preferences; 
console.log(day); // Prints 'stay inside'


// Built-in Object Methods //

//We can also take advantage of built-in methods for Objects! For example, we have access to object instance methods like: .hasOwnProperty(), .valueOf(), and many more! There are also useful Object class methods such as Object.assign(), Object.entries(), and Object.keys() just to name a few.

const robot = {
	model: 'SAL-1000',
  mobile: true,
  sentient: false,
  armor: 'Steel-plated',
  energyLevel: 75
};

// What is missing in the following method call?
const robotKeys = Object.keys(robot);

console.log(robotKeys); //[ 'model', 'mobile', 'sentient', 'armor', 'energyLevel' ]

// Declare robotEntries below this line:

const robotEntries = Object.entries(robot)
console.log(robotEntries); 
/*
[ [ 'model', 'SAL-1000' ],
[ 'mobile', true ],
[ 'sentient', false ],
[ 'armor', 'Steel-plated' ],
[ 'energyLevel', 75 ] ]
 */

// Declare newRobot below this line:

const newRobot = Object.assign({laserBlaster: true, voiceRecognition: true}, robot);
console.log(newRobot);
/*
{ laserBlaster: true,
  voiceRecognition: true,
  model: 'SAL-1000',
  mobile: true,
  sentient: false,
  armor: 'Steel-plated',
  energyLevel: 75 }
*/

// Review //

/*
The object that a method belongs to is called the calling object.

The this keyword refers to the calling object and can be used to access properties of the calling object.

Methods do not automatically have access to other internal properties of the calling object.

The value of this depends on where the this is being accessed from.

We cannot use arrow functions as methods if we want to access other internal properties.

JavaScript objects do not have built-in privacy, rather there are conventions to follow to notify other developers about the intent of the code.

The usage of an underscore before a property name means that the original developer did not intend for that property to be directly changed.

Setters and getter methods allow for more detailed ways of accessing and assigning properties.

Factory functions allow us to create object instances quickly and repeatedly.

There are different ways to use object destructuring: one way is the property value shorthand and another is destructured assignment.

As with any concept, it is a good skill to learn how to use the documentation with objects!
*/