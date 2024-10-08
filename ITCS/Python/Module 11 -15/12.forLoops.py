colours = ['blue', 'red', 'green']
for x in colours: # 'x' can be named anything suitable to you
  print(x)

#If you just do print(colours) it will not look like a proper list. It will print out like this, 'blue', 'red', 'green'

#In loops, range() is used to control how many times the loop will be repeated
#When working with range(), you can pass between 1 and 3 integer arguments to it:
  #Range(start, stop, step)
    #Start states the integer value at which the sequence begins, if this is not included then start begins at 0
    #Stop is always required and is the integer that is counted up to but not included
    #Step sets how much to increase (or decrease in the csase of negative numbers) the next iteration, if this is omitted then step defaults to 1

for a in range(10):# Starts at 0, goes upto 9
  print(a)

for x in range(10,35):# Starts at 10, stops at 34
  print(x)

for y in range(0, 100, 2):# Will start at 0, go upto 100 places (which will be 98) and count in 2's
  print(y)


#Task

food = ['Burger', 'Wings', 'Chips']
for fav in food:
  print(fav)

for odd in range(1,30,2):
  print(odd)