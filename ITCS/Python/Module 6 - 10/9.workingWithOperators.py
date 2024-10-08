#Module 9 - Working with Operators
#Just a few to get your mind thinking

#################   Arithmetic Operators

x = 5 + 2
print(x)

y = 5 - 2
print(y)

z = 5 * 2
print(z)

a = 8 / 2
print(a)

b = 2**2
print(b)

#################   Assignment Operators
#ADD AND...
a = 2
a += 3
print(a)

#SUBTRACT AND...
z = 20
z -= 12
print(z)

#MULTIPLY AND...
x = 8
x *= 2
print(x)

#DIVIDE AND...
b = 20
b /= 2
print(b)

#EXPONENT AND...
t = 8
t **= 2
print(t)

#################  Comparison Operators
x == 10
y == 12
print(x == y)  #True or False?

t = 22
s = 8
print(t <= s)  #True or False?

#################   Logical Operators
a = 4
print(a > 2 and a < 7)    #True or False

b = 3
print(b < 2 or b > 1)     #True or False

#################   Identity Operators
w = 2
y = 6
x = w
print(w is y)
print(w is x)

#################   Membership Operators
nums = [1,2,3,4]
print(3 in nums)

nums = [1,2,3,4]
print(5 not in nums)

#################   Bitwise Operators

a = 24
b = 60

print(bin(a))
print(bin(b))