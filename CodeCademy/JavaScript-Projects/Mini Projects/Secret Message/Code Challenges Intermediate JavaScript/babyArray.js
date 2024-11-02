const convertToBaby = arr => {
  let babyArray = []; 
  for (let i = 0; i < arr.length; i++){
    babyArray.push('baby ' + arr[i]);
  }
  return babyArray;
}

const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];

console.log(convertToBaby(animals)) 

/*
// As a function declaration:
function convertToBaby(arr) {
      const babyArray = [];
      for (let i = 0; i < arr.length; i++) {
            babyArray.push('baby ' + arr[i]);
      }
      return babyArray
}
*/ 

/*
The push() method adds new items to the end of an array.

The push() method changes the length of the array.

The push() method returns the new length.
*/