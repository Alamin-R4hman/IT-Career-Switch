#Slicing can not only be used for lists and tuples, but custom data structures as well, with the slice object

num = [1, 2, 3, 4, 5, 6]
num[2:5] #Needs to have colon in the middle
# The 2 means to start at the second item in the list (note the slicing index starts at 0 which is the number 1 in this example)
# The 5 means to end at the sixth item in the list, but not include it.
print(num)

#you can slice in a for loop if you want to loop through a subset of the elements in the list.
#In this example below we loop through the first three players and print their names as part of a simple roster

players = ["Bob", "Steve", "K", "TJ", "AP"]
print("Here are the first three players in my team:")
for player in players[:3]:
  print(player.title())

players = ["Bob", "Steve", "K", "TJ", "AP"]
print("Here are the first three players in my team:")
for player in players[1:4]:
  print(player.title())


num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
print(num[1:8:2])
#Starts at 2, goes upto 9 but dosne't include it and goes up in 2's

#Task
num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
num[2:5]
print(num[2:5])

num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
num[0:10:2]
print(num[0:10:2])