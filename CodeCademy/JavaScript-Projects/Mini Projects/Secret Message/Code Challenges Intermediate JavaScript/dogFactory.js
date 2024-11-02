// Final solution:
const dogFactory = (name, breed, weight) => {
  return {
      _name: name,
      _breed: breed,
      _weight: weight,
      get name() {
          return this._name;
      },
      set name(newName) {
          this._name = newName;
      },
      get breed() {
          return this._breed;
      },
      set breed(newBreed) {
          this._breed = newBreed;
      },
      get weight() {
          return this._weight;
      },
      set weight(newWeight) {
          this._weight = newWeight;
      },
      bark() {
          return 'ruff! ruff!'
      },
      eatTooManyTreats() {
          this._weight++
      }
  }
}

/*
// Solution to checkpoint 1:
const dogFactory = (name, breed, weight) => {
    return {
          name: name,
          breed: breed,
          weight: weight
    }
}

// Solution to checkpoint 2:
const dogFactory = (name, breed, weight) => {
    return {
          _name: name,
          _breed: breed,
          _weight: weight,
          get name() {
                return this._name;
          },
          set name(newName) {
                this._name = newName;
          },
          get breed() {
                return this._breed;
          },
          set breed(newBreed) {
                this._breed = newBreed;
          },
          get weight() {
                return this._weight;
          },
          set weight(newWeight) {
                this._weight = newWeight;
          }
    }
}

*/

/*
Function Purpose:

dogFactory creates a dog object with specific properties and methods.
Parameters:

Takes three parameters: name, breed, and weight.
Returns an Object:

The function returns an object with properties and methods.
Properties with Underscores:

_name, _breed, and _weight store the initial values.
The underscore indicates these are internal properties.
Getters and Setters:

Getters: Allow access to the properties.
get name(): Returns _name.
get breed(): Returns _breed.
get weight(): Returns _weight.
Setters: Allow updating the properties.
set name(newName): Updates _name.
set breed(newBreed): Updates _breed.
set weight(newWeight): Updates _weight.
Methods:

bark(): Returns the string 'ruff! ruff!'.
eatTooManyTreats(): Increases _weight by 1.
This function is useful for creating dog objects with specific behaviors and properties.
*/
