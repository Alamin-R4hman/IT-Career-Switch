// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};


/*
Function Definition: Define a function named pAequorFactory that takes two parameters: a number and an array of DNA bases.

Return an Object: The function should return an object with properties specimenNum and dna.

Here’s how you can implement this:
*/

const pAequorFactory = (specimenNum, dna) => {
  return {
    specimenNum: specimenNum,
    dna: dna
  };
};

// Example usage:
const specimen1 = pAequorFactory(1, mockUpStrand());
console.log(specimen1);
// Output will be an object with a unique specimen number and a DNA strand

/*
Explanation:
Function Parameters:

specimenNum: A unique number for each organism.
dna: An array of 15 DNA bases.
Returned Object:

specimenNum: Stores the unique number.
dna: Stores the array of DNA bases.
This function sets up the basic structure for creating multiple P. aequor organisms, each with a unique identifier and a DNA sequence. You can later add more methods to this object to simulate behaviors or characteristics of the organism.
*/

/*
To add the .mutate() method to the pAequorFactory function, follow these steps:

Add a Method: Define a .mutate() method within the returned object.
Select a Random Base: Randomly choose a base in the dna array to mutate.
Change the Base: Change the selected base to a different one (not the same as the original).
Return the Mutated DNA: Return the updated dna array.
Here’s how you can implement this:
*/

const pAequorFactory = (specimenNum, dna) => {
  return {
    specimenNum: specimenNum,
    dna: dna,
    mutate() {
      // Step 2: Select a random index in the dna array
      const randomIndex = Math.floor(Math.random() * this.dna.length);
      
      // Step 3: Change the base at the random index
      const currentBase = this.dna[randomIndex];
      let newBase;
      const dnaBases = ['A', 'T', 'C', 'G'];
      
      // Ensure the new base is different from the current base
      do {
        newBase = dnaBases[Math.floor(Math.random() * 4)];
      } while (newBase === currentBase);
      
      // Update the dna with the new base
      this.dna[randomIndex] = newBase;
      
      // Step 4: Return the mutated dna
      return this.dna;
    }
  };
};

// Example usage:
const specimen1 = pAequorFactory(1, mockUpStrand());
console.log('Original DNA:', specimen1.dna);
console.log('Mutated DNA:', specimen1.mutate());


/*
Explanation:
Random Index: A random index is selected from the dna array to determine which base to mutate.
New Base Selection: A new base is chosen randomly from the available bases (A, T, C, G), ensuring it is different from the current base.
Mutation: The base at the selected index is replaced with the new base.
Return: The updated dna array is returned, showing the mutation.
This method simulates the high mutation rate of P. aequor by changing one of its DNA bases randomly.
*/

/*
To add the .compareDNA() method to the pAequorFactory function, follow these steps:

Add a Method: Define a .compareDNA() method within the returned object.
Parameter: The method takes another pAequor object as a parameter.
Compare DNA: Compare the dna arrays of the current object and the passed object.
Calculate Similarity: Count how many bases are identical and in the same position.
Print the Result: Print the percentage of DNA in common using the specimenNum.
Here’s how you can implement this:
*/

const pAequorFactory = (specimenNum, dna) => {
  return {
    specimenNum: specimenNum,
    dna: dna,
    mutate() {
      const randomIndex = Math.floor(Math.random() * this.dna.length);
      const currentBase = this.dna[randomIndex];
      let newBase;
      const dnaBases = ['A', 'T', 'C', 'G'];
      do {
        newBase = dnaBases[Math.floor(Math.random() * 4)];
      } while (newBase === currentBase);
      this.dna[randomIndex] = newBase;
      return this.dna;
    },
    compareDNA(otherPAequor) {
      let identicalBases = 0;
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === otherPAequor.dna[i]) {
          identicalBases++;
        }
      }
      const percentage = ((identicalBases / this.dna.length) * 100).toFixed(2);
      console.log(`specimen #${this.specimenNum} and specimen #${otherPAequor.specimenNum} have ${percentage}% DNA in common.`);
    }
  };
};

// Example usage:
const specimen1 = pAequorFactory(1, mockUpStrand());
const specimen2 = pAequorFactory(2, mockUpStrand());
specimen1.compareDNA(specimen2);

/*
Explanation:
Loop Through DNA: The method iterates over the dna arrays of both pAequor objects.
Count Identical Bases: It counts how many bases are identical and in the same position.
Calculate Percentage: The percentage of identical bases is calculated and formatted to two decimal places.
Print Result: A message is printed showing the percentage of DNA in common between the two specimens, identified by their specimenNum.
This method allows the research team to compare the DNA sequences of different P. aequor organisms and understand their genetic similarity.
*/

/*
To add the .willLikelySurvive() method to the pAequorFactory function, follow these steps:

Add a Method: Define a .willLikelySurvive() method within the returned object.
Count ‘C’ and ‘G’ Bases: Iterate through the dna array and count the number of ‘C’ and ‘G’ bases.
Calculate Percentage: Determine the percentage of ‘C’ and ‘G’ bases in the dna.
Return Survival Likelihood: Return true if the percentage is 60% or more, otherwise return false.
Here’s how you can implement this:
*/

const pAequorFactory = (specimenNum, dna) => {
  return {
    specimenNum: specimenNum,
    dna: dna,
    mutate() {
      const randomIndex = Math.floor(Math.random() * this.dna.length);
      const currentBase = this.dna[randomIndex];
      let newBase;
      const dnaBases = ['A', 'T', 'C', 'G'];
      do {
        newBase = dnaBases[Math.floor(Math.random() * 4)];
      } while (newBase === currentBase);
      this.dna[randomIndex] = newBase;
      return this.dna;
    },
    compareDNA(otherPAequor) {
      let identicalBases = 0;
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === otherPAequor.dna[i]) {
          identicalBases++;
        }
      }
      const percentage = ((identicalBases / this.dna.length) * 100).toFixed(2);
      console.log(`specimen #${this.specimenNum} and specimen #${otherPAequor.specimenNum} have ${percentage}% DNA in common.`);
    },
    willLikelySurvive() {
      let count = 0;
      for (let base of this.dna) {
        if (base === 'C' || base === 'G') {
          count++;
        }
      }
      const percentage = (count / this.dna.length) * 100;
      return percentage >= 60;
    }
  };
};

// Example usage:
const specimen1 = pAequorFactory(1, mockUpStrand());
console.log(specimen1.willLikelySurvive()); // Returns true or false based on DNA composition

/*
Explanation:
Count ‘C’ and ‘G’ Bases: The method iterates over the dna array and counts how many bases are ‘C’ or ‘G’.
Calculate Percentage: It calculates the percentage of ‘C’ and ‘G’ bases in the dna.
Return Result: The method returns true if the percentage is 60%
*/

/*
To create 30 instances of pAequor that are likely to survive, follow these steps:

Initialize an Array: Create an empty array to store the instances.
Generate Instances: Use a loop to create instances of pAequor using the pAequorFactory function.
Check Survival: Use the .willLikelySurvive() method to ensure each instance has a high chance of survival.
Store Valid Instances: Add only those instances that are likely to survive to the array.
Repeat Until 30 Instances: Continue the process until you have 30 instances in the array.
Here’s how you can implement this:
*/

const createSurvivingPAequor = () => {
  const survivingPAequor = [];
  let id = 1;

  while (survivingPAequor.length < 30) {
    const newOrganism = pAequorFactory(id, mockUpStrand());
    if (newOrganism.willLikelySurvive()) {
      survivingPAequor.push(newOrganism);
    }
    id++;
  }

  return survivingPAequor;
};

// Example usage:
const survivingOrganisms = createSurvivingPAequor();
console.log(survivingOrganisms); // This will print an array of 30 pAequor instances that are likely to survive


/*
Explanation:
Array Initialization: survivingPAequor is an empty array to store the instances.
Loop for Creation: A while loop runs until 30 surviving instances are created.
Instance Creation: Each new organism is created with a unique id and a random DNA strand.
Survival Check: The .willLikelySurvive() method checks if the organism has at least 60% ‘C’ or ‘G’ bases.
Add to Array: If the organism is likely to survive, it is added to the survivingPAequor array.
Increment ID: The id is incremented for each new organism to ensure uniqueness.
This process ensures that you have 30 instances of P. aequor that are likely to survive in their natural environment.
*/


/* Extra Task
To tackle these challenges, follow these steps:

1. Add .complementStrand() Method
Define the Method: Add a .complementStrand() method to the pAequorFactory object.
Create Complementary Strand: Iterate over the dna array and create a new array with complementary bases.
Return the Complementary Strand: Return the new array.
Here’s how you can implement this:

const pAequorFactory = (specimenNum, dna) => {
  return {
    specimenNum: specimenNum,
    dna: dna,
    mutate() {
      const randomIndex = Math.floor(Math.random() * this.dna.length);
      const currentBase = this.dna[randomIndex];
      let newBase;
      const dnaBases = ['A', 'T', 'C', 'G'];
      do {
        newBase = dnaBases[Math.floor(Math.random() * 4)];
      } while (newBase === currentBase);
      this.dna[randomIndex] = newBase;
      return this.dna;
    },
    compareDNA(otherPAequor) {
      let identicalBases = 0;
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === otherPAequor.dna[i]) {
          identicalBases++;
        }
      }
      const percentage = ((identicalBases / this.dna.length) * 100).toFixed(2);
      console.log(`specimen #${this.specimenNum} and specimen #${otherPAequor.specimenNum} have ${percentage}% DNA in common.`);
    },
    willLikelySurvive() {
      let count = 0;
      for (let base of this.dna) {
        if (base === 'C' || base === 'G') {
          count++;
        }
      }
      const percentage = (count / this.dna.length) * 100;
      return percentage >= 60;
    },
    complementStrand() {
      const complement = {
        'A': 'T',
        'T': 'A',
        'C': 'G',
        'G': 'C'
      };
      return this.dna.map(base => complement[base]);
    }
  };
};

// Example usage:
const specimen1 = pAequorFactory(1, mockUpStrand());
console.log('Original DNA:', specimen1.dna);
console.log('Complementary DNA:', specimen1.complementStrand());

code

2. Find the Two Most Related Instances
Iterate Over Instances: Compare each pair of pAequor instances using .compareDNA().
Track the Most Related Pair: Keep track of the pair with the highest percentage of DNA in common.
Output the Most Related Pair
*/





