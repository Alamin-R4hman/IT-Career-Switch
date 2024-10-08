#Module 25 - Displaying Datetime and Working Directory

#Displaying Datetime
#In Python, date, time and datetime classes provides a number of function to deal with dates, times and time intervals
#Date and datetime are objects in Python, so when you manipulate them you are actually manipulating objects

#Whenever you manipulate dates or times, you need to import datetime function

#We will go over these classes for the datetime module
  #date - manipulate just date (month, day, year)
  #datetime - combination of time and date (month, day, year, hour, second, microsecond)

#To make our code a little faster, we can import the module and classes together, so in code we can just refer to the class directly

from datetime import date
from datetime import time
from datetime import datetime

today = date.today()
date_time = datetime.now()

print("Today's date is: ", today)
print("Altogehter now: ", date_time)


print("Can you be more specific please? ", date_time)
print("Break it down....")
print("The hour ", date_time.hour)
print("The minute ", date_time.minute)
print("The seconds ", date_time.second)

#Display Working Directory

#To accomplish this task we will use the os module
#It has a method called getcwd() which will return current working directory. This will return the full path of the current working directory
#If you jsut want to use the directory name the either you can split by "/" or use another function called basename from os.path module

print("\n")
import os

dirpath = os.getcwd()
print("Your current working directory is: " + dirpath)

foldername = os.path.basename(dirpath)
print("The specific folder is: " + foldername)

#Displaying the File Metadata

#The os module offers the os.stat() function which we will use: os.stat('file here')

print(os.stat("24.mathAndRandomModules.py"))