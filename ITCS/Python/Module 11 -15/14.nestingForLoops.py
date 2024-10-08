# A nested loop is a loop inside a loop
# The "inner loop" will be executed one time for each iteration of the "outer loop"

outer = ['outer1', 'outer2', 'outer3']
nest = ['nest 1', 'nest 2', 'nest3']

for x in outer:
  for y in nest:
    print(x,y)

numbers = [1, 2, 3]
letters = ['a', 'b', 'c']

for x in numbers:
  print(x)
  for y in letters:
    print(y)

# Task

outerLoop = ['Cat', 'Task', 'Best']
innerLoop = [1, 2, 3, 4, 5,] 

#for out in outerLoop:
  #for inner in innerLoop:
    #print(out,inner)

for out in outerLoop:
  print(out)
  for inner in innerLoop:
    print(inner)