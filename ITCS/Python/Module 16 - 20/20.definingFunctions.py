#Function is called with the 'def' keyword

def firstFunction():
  print("Hello world")

firstFunction()

def secFunction():
  x = 1
  while x < 4:
    print("Hello World 2")
    x += 1

secFunction()

#Inside a function you can have parameters
#You can have as many as you want, just remember to seperate with a comma

def first_function(fname):
  print("Hello " + fname)

first_function("Alamin")
first_function("Leyla")
first_function("Kisa")

#Calling our module 20.hello.py

from Python/Module 16 - 20/20.hello.py

import Python/Module 16 - 20/20.hello.greet()