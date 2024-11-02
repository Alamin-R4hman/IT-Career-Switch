const containKeys = elem => elem === 'keys'
const findMyKeys = arr => {
  return arr.findIndex(containKeys);
}
const randomStuff = ['credit card', 'screwdriver', 'receipt', 'gum', 'keys', 'used gum', 'plastic spoon'];

console.log(findMyKeys(randomStuff))
// Should print 4