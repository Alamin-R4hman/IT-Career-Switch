#The sort() method sorts the list ascending by default

colours = ["Blue", "Red", "Green", "Yellow"]
print(colours)

colours.sort()
print(colours)

#Reverse it alphabetically
colours = ["Blue", "Red", "Green", "Yellow"]

colours.sort(reverse=True)
print(colours)

#Just Reverse
colours = ["Blue", "Red", "Green", "Yellow"]

colours.reverse()
print(colours)

#When you use sort() it permanently chnages the list - you might not want this to happen
#To maintain the original order of a list but present it in a sorted order we will use sorted()

colours = ["Blue", "Red", "Green", "Yellow", "Pink"]
print("Here is the first list")
print(colours)

print("\nHere is the sorted list")
print(sorted(colours))

#Goes to normal without permanently changing it
print(colours)

print("-----------------------------------------------------------")

#Task
ages = ['40', '25', '65', '45']
ages.sort()
print(ages)

ages = ['40', '25', '65', '45']
ages.sort(reverse=True)
print(ages)