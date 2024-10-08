#print(type(DATA))

x = 10.32
print(type(x))
#<class 'float'>

print(type(10.32))
#<class 'float'>

print(type(10))
#<class 'int'>

print(type("Hello"))
#<class 'str'>

isinstance(3.36, float)
#True

isinstance(3.36, int)
#True

num = 25
print(num)
#25

print(float(num))
#25.0

someNumber = "55"
print(someNumber)
#55

print(float(someNumber))
#55.0

firstString = "Hello"
secondString = firstString
print(firstString)
#Hello

print(secondString)
#Hello

#Let's change the first string below
firstString = "I have been changed"
print(firstString)
#I have been changed

print(secondString) #Will go back to the original value not current until it is changed

secondString = firstString
print(secondString)
#I have been changed

message = "I will be late for work"
message2 = 'I will be late for work again'
print(message)
print(message2)
#I will be late for work
#I will be late for work again

#message3 = 'David's car broke' 
#print(message3) #Will not work because of the apostophes in the start, middle and end on message 3.

message3 = "David's car broke down"
print(message3)
#David's car broke down

firstName = "david"
secondName = "barker"
print(firstName.title())
#David with a capital D

# .upper() - Creates all uppercase
# .lower() - Creates all lowercase
# .title() - capitalises main letters

fname = "alamin"
sname = "rahman"
fullName = fname + " " + sname
print(fullName.title())
#Alamin Rahman

fname = "alamin"
age = 25
#print(fname + "is " + age + " years old")
#Wont work becasue can't have string and int togehter

print(fname.title() + " is " + str(age) + " years old")

# strip() removes white space from both ends
# rstrip() removes white space from right end
# lstrip() removes white space from left end

#Boolean will always be spelt with capital B

the_Boolean = 10 > 20
print(the_Boolean)
#Prints False as 10 is not greater than 20

#Task
num1 = 15
print(num1)

num2 = 6.36272
print (type(num2))

test = 10 > 20
print(test)

who = "alamin"
what = "playing"
where = "home"
print(who.title() + " is " + what + " at " + where)




