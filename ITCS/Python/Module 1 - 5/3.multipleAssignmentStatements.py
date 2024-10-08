#You can assign multiple variables at the same time in one line of code

a, b = 5, 10

#Or

(a, b) = (5 ,10)

# a = 5 b = 10

# You can also assign a single value to multiple variables at the same time

a = b = c = 3

#You'll commonly see multiple assignment used in FOR loops

numbers = {"First Num": '1', "Second Num": '2'}
for key, value in numbers.items():
  print (f"Key {key} has a value of {value}")

name = "David"
age = "20"
print (F"His name is {name} and he is {age} years old")

#a, b = 1, 2, 3 
#Won't work because there is not a value set for 3

#Task
a, b, c = 10, 20 ,30
print(a)
print(b)
print(c)

integer, string1, decimal, string2 = 33, "Car", 2.158, "hey"
print(integer)
print(string1)
print(decimal)
print(string2) 

ages = {"Dave": '41', "Bob": '22', "Mark": '38'}
for key, value in ages.items():
  print(f"{key} is {value} years old")