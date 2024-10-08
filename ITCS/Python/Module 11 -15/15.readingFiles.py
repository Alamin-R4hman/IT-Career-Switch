# To read or write to a file, you need to open it first
  # To open a file in python, use the built-in open() function
  # This function returns a file object i.e a handle
  # You can use it to read or modify the file

#Example:

print("Reading Files")

a = open("Python/15demo.txt", "r")
print(a.read())

# File object = open(file_name[, access_mode])
# The mode argument is optional; 'r' will be assumed if it's omitted
# Let's take a look at the access modes on the next slide

#<r> - It opens a file in read only mode while the file offset stays at the root
#<r+> - It opens the file in both (read + write) modes while the file offset is agin at the root level
#<w> - It allows write-level access to a file. If the file already exists, then it'll get overwritter. It'll create a new file if the same doesn't exist
#<a> - It opens a file in append mode. The offset goes to the end of the file. If the file doesn't exist, then it gets created

print("--------------------------------------------------")
print("Reading Files - Readline()")

a = open("Python/15demo.txt", "r")
print(a.readline())
a.close()

print("--------------------------------------------------")


a = open("Python/15demo.txt", "r")
print(a.read(7)) #Reads first 7 characters including white space
a.close()

print("--------------------------------------------------")

#Another way of opening files is using 'with'
#This opens and closes the file for you once you are done, eliminating the need to use close(), which might be advantageous if the program has a bug and never reaches the close() method

with open("Python/15demo.txt") as myfile:
  contents = myfile.read()
  print(contents)

print("--------------------------------------------------")

a = open("Python/15demo.txt", "a")
a.write("\nHere is another line in our text file")#This is creating a new line in the text file
a.close()

print("--------------------------------------------------")

with open("Python/15demo.txt") as myfile:
  contents = myfile.read()
  print(contents) #This will now show us the new lines written

print("--------------------------------------------------")

a = open("Python/15demo.txt", "w") # 'W' means write
a.write("\nNew overwritten text file")
a.close() #Make sure to use close() or With() otherwise file will remain open

#New edited file

with open("Python/15demo.txt") as myfile:
  contents = myfile.read()
  print(contents) #This will now show us the new file

#Create a new file

#To create a new file in Python, use the open(), with one of the following parameters:

# "x" - Create; will create a file, returns an error if the file exists
# "a" - Append; will create a file if the specified file does not exist
# "w" - Write; will create a file if the specified file does not exist

#y = open("Python/alaminsfile.txt", "x")


#Task
#x = open("Python/15task.txt", "x")
#x.close()

x = open("Python/15task.txt", "a")
x.write("Here is line 1" '\n')
x.write("Here is line 2" '\n')
x.close()

x = open("Python/15task.txt", "r")
print(x.read())

#Task 2

x = open("Python/15task2.txt", "x")
x.close()

x = open("Python/15task2.txt", "a")
b = 1
while b < 4:
  x.write("Here is line" + str(b) + '\n')
  b += 1
  x.close

x = open("Python/15task2.txt", "r")
print(x.read())
x.close()