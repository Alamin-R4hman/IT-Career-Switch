const sortYears = arr => {
  return arr.sort(checkYears);
}

const checkYears = (year1, year2) => {
  return year1 < year2
}

const years = [1970, 1999, 1951, 1982, 1963, 2011, 2018, 1922]

console.log(sortYears(years))
// Should print [ 2018, 2011, 1999, 1982, 1970, 1963, 1951, 1922 ]

/*
Function sortYears:

const sortYears = arr => {
  return arr.sort(checkYears);
}

Defines a function sortYears using arrow function syntax.
Takes one parameter, arr, which is expected to be an array of years.
Uses the .sort() method to sort the array, passing checkYears as the comparison function.
Comparison Function checkYears:

const checkYears = (year1, year2) => {
  return year1 < year2;
}

Defines a function checkYears that takes two parameters, year1 and year2.
Returns true if year1 is less than year2, which means year1 should come after year2 in descending order.
Array of Years:

const years = [1970, 1999, 1951, 1982, 1963, 2011, 2018, 1922];

An array years is defined with several year values.
Sorting and Output:

console.log(sortYears(years));

Calls sortYears(years), which sorts the years array in descending order using the checkYears function.
The sorted array [2018, 2011, 1999, 1982, 1970, 1963, 1951, 1922] is printed to the console.
How the Sorting Works:

The .sort() method uses the checkYears function to determine the order of elements.
If year1 < year2 returns true, year1 is considered greater, so it comes later in the array.
This results in sorting the array in descending order.
*/