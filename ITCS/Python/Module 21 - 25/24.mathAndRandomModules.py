#Module 24 - Using Math and Random Modules

#In python a number of mathematical operations can be performed by importing the math module
#Math has tons of operations and we can't list them all out here like mentioned during the lecture
#We can use this module to find the square root, sine, tangent, and powers of numbers and on and on. See link below
#All listed here: https://docs.python.org/3/library/math.html


import math

num = int(input("Please enter your favorite number, and  we will tell you the square root: "))
print(math.sqrt(num))


#Random - Python has a built-in module that you can use to make random numbers
#The random module has a set of mthods:  https://docs.python.org/3/library/random.html

import random

#print("Print a random integer between 0 and 500:", random.randint(0, 500)) - FROM FILE

print("Printing random number")
print(random.random())

#Returns the next random floating point number in the range (0.0, 1.0)

#To generate random integers, we can use: randint() and randrange()

import random

print("Printing random integer", random.randint(0,1000))
print("Printing random integer", random.randrange(0,10))#Can use a step to make it a specific thing