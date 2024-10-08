#Module 23 - Handling Exceptions

#Check out pyhton.org

#This type of error occurs whenever the syntax is correct but the Python code results in an error
  #Not a syntax error like forgetting to close a parentheses or leaving off a colon

#print(0/0)#See what happens 

print("------------------------------------------------------------------------")

#Python details what type of exception error was encountered
  #ZeroDivisionError

#We can handle these exceptions using TRY blocks

#The words "try" and "except" are Python keywords and are used to catch exceptions
#The code within the "try" clause will be executed statement by statement
#If an exception occurs, the rest of the try block will be skipped and the except clause will be executed

#try:
  #some statements here

#except:
  #exception handling

try:
  print(0/0)

except ZeroDivisionError:
  print ("You can't divide by zero!")

print("------------------------------------------------------------------------")

#Wrong way of doing this

number = int(input("Enter a number between 1 - 10: "))
print("You entered the number", number)


import sys

try:#
  num = int(input("Please enter your favorite number: "))

except ValueError:
    print("Please only use numbers, no text")#This will print if a string is entered
    sys.exit()#Forces program to stop gracefully after the error

print("You enetered the number", num)#This will print if a number is entered

#Make sure that the 'else' clause is run before the finally block
#The 'finally' clause is optional and is intended to define clean-up actions that must be executed under all circumstances

#try:
   #data = "something that can go wrong"

#except IOError:
   #handle the exception error like above code

#else:
   #does a different exception handling

#finally:
   #print("Goodbye, world!#")