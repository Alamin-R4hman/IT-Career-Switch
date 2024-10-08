# With the while loop we can execute a set of statments as long as the condition is true

a = 1 #It will start with 1, print that and add 1 when it reaches the bottom. Once it reaches 5 it will stop
while a < 6:
  print(a)
  a += 1

x = "Hello World"
y = 1
while y <= 3:
  print(x)
  y += 1

#With the "continue" statement we can stop the current iteration, and continue with the next

x = 0
while x < 6:
  x += 1
  if x == 4:  
    continue #The number 4 will be skipped but continue with the rest
  print(x)

a = 1
while a < 14:
  print(a)
  if a == 4:
    break #
  a += 1

#Task

a = "Great Job"
b = 1
while b <= 3:
  print (a)
  b += 1

o = 1 
while o < 10:
  print(o)
  if o == 6:
    break
  o += 1