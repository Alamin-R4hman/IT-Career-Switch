#Default values indicate that the function argument will take that value if no argument value is passed during a function call
#The default value is assigned by using assignment = operator
  #Keyword = value

#Any number of arguments in a function can have a default value
#Once we have a default value argument, all the arguments to its right must have default values

def student(firstname, lastname="Bigger", major="IT"):
    print(firstname, lastname, "majors in", major)

#1 argument

student("Tony")#Tony will go to the first name section in student

#2 arguements

student("Stan", "Lee")

#3 arguments

student("Tony", "Stark", "physics")#Tony will go to firstname, Stark will go to lastname instead of bigger and physics will replace IT