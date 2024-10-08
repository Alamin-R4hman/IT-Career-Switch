#Copying Files

#Python provides built-in functions for easily copying files using the Operating System Shell utilities
#Following command is used to Copy File

#shutil.copy(src,dst) 

#Following command is used to Copy File with MetaData Information (MAC times, permissions)

#shutil.copystat(src,dst)

#Python Modules

#A module is like a code library; a file containing a set of functions you want to include in your application
#You can create your own or use the built-in modules with Python

#import shutil
#src = "Python/15demo.txt"
#dst = "Python/alaminsfile.txt" #destination file doesn't have to exist
#shutil.copy(src, dst)

#Rename a file

#import os
#os.rename("Python/alaminsfile.txt", "Python/testfile.txt")

#Delete a file

#import os
#os.remove("Python/tempCodeRunnerFile.py")

#Task

import shutil
src = "Python/15demo.txt"
dst = "Python/testfile2.txt" #destination file doesn't have to exist
shutil.copy(src, dst)

import os
os.rename("Python/testfile2.txt","Python/testFile2.txt")

x = open("Python/testFile2.txt", "r")
print(x.read())
x.close()

#Task 2

x = open("Python/16task.txt", "x")
x.close()

x = open("Python/16task.txt", "a")
x.write("Here is line 1" '\n')
x.write("Here is line 2" '\n')
x.close()

import shutil
src = "Python/16task.txt"
dst = "Python/16task2.txt" #destination file doesn't have to exist
shutil.copy(src, dst)

x = open("Python/16task2.txt", "a")
x.write("This is some new lines 1" '\n')
x.write("This is some new lines 2" '\n')
x.close()

#Answer

import shutil
import os
x = open("mynewfile.txt", "x")
x.close()

x = open("mynewfile.txt", "a")
x.write("This is some new lines 1" '\n')
x.write("This is some new lines 2" '\n')
x.close()

src = "MyNewFile.txt"
dst = "AlaminsDemo.txt"

shutil.copy(src, dst)

x = open("AlaminsDemo.txt", "a")
b = 1
while b < 4
x.write("Time for new line " +str(b) + "\n")
b += 1
x.close()

first = open("MyNewFile.txt", "r")
print(first.read())
first.close()

second = open("AlaminsDemo.txt", "r")
print(second.read())
second.close()