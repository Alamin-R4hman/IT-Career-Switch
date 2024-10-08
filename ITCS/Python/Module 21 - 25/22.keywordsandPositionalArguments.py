#Module 22 - Keyword and Positional Arguments

#Python allows functions to be called using keyword arguments
#When the functions are called in this way, the order (position) of the arguments can be changed
#We can mix positional arguments with keyword arguments during a function call

#Keyword arguments must follow positional arguments 
  #Having a positional argument after a keyword argument will result in errors

def greet(name, msg="How are you today?"):
    print("Hey", name + ", " + msg)

# 2 keyword

greet(name="Dave", msg="What's going on today?")

# 2 keyword arguments out of order

greet(msg="What's going on today?", name="Dave")

#1 positional, 1 keyword

greet("Dave", msg = "How you doin?")

# Take a look at this in the termianl

greet("Dave")# "Will print as Hey Dave, How are you today" as this has been set as the default value in the function