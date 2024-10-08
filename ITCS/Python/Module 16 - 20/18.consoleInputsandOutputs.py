#Module 18 - Reading Console inputs and formatting outputs

#input() is Python 3.0
#raw_input() is python 2.0

txt = input("Can you see this? Yes or No")
print("You said", txt)

#txt = input("Please enter a number: ")
#num = int(txt)
#print("You entered the number", num)

txt = input("Give me a number:")

try:
  num = int(txt)#refering to the code above
  print("The number you gave is:", num)#Will print out if it is a integer given
except ValueError:
  print("Please put in a real number, not a string or text")#Wll print out if integer was not given

#Formatting Output

#The format() method allows you to format selected parts of a string
#Sometimes there are parts of a text that you do not control, maybe they come from a database, or user input
#To control such values, add placeholders curly brackets{} in the text, and run the value through the format() method

salary = 44000
txt = "You make £{} a year "
print(txt.format(salary))

#Curly Bracket Parameters

#We can include more parameters within the curly braces of our syntax

#{Field_name:conversion}
  #field_name specifies the index number of the argument to the str.format() method
  #Conversion refers to the conversion code of the data tyoe that you're using with the formatter

#The conversion type refers to the single-character type code that Python uses inside the brackets

# s is for string, d is for display decimal integers, and f is for display floats with decimal places
  #{0, s} <- Index zero and a string

#for more info look at https://docs.python.org/3.6/library/string.html#format-specification-mini-language

#You can have mutiple {} in a string

string = "Dave teaches {} {}"
print(string.format("cyber", "security"))

#Can have more {}
#string = "Dave teaches {} {}, and has {} {}"
#print(string.format("cyber", "security",7, "certifications" ))

#Can order them
#string = "Dave teaches {3} {0}, and has {2} {1}"
#print(string.format("security", "certifications",7, "cyber" ))

string = "Bob likes to play {act} and eat {1} {0}"
print(string.format("dogs", "hot", act = "games"))

#Another way of wrting it is
print("Bob likes to play {act} and eat {1}{0}".format("dogs","hot", act = "games"))