const isTheDinnerVegan = arr => {
  if(arr.every(isVegan)) {
    return true;
  }else {
  return false
  }
}

const isVegan = item => item.source === 'plant';

const dinner = [{name: 'hamburger', source: 'meat'}, {name: 'cheese', source: 'dairy'}, {name: 'ketchup', source:'plant'}, {name: 'bun', source: 'plant'}, {name: 'dessert twinkies', source:'unknown'}];

console.log(isTheDinnerVegan(dinner))
// Should print false

/*
Purpose:

The code checks if all the food items in a meal are vegan (plant-based).
Function isTheDinnerVegan:

This function takes an array of food items.
It uses .every() to check if all items are vegan by calling another function, isVegan.
If all items are vegan, it returns true; otherwise, it returns false.

Function isVegan:

This function checks if a single food item is vegan.
It returns true if the item’s source is 'plant'.

Array dinner:

This is a list of food items, each with a name and source.
Example items: hamburger (meat), cheese (dairy), ketchup (plant).

Checking the Meal:

isTheDinnerVegan(dinner) checks if all items in dinner are vegan.
Since some items are not plant-based, it returns false.
Output:

The result false is printed, indicating the meal is not entirely vegan.
*/