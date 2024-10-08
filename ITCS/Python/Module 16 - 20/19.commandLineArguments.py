#Module 19 - Reading Command Line Arguments

#Reading information about the file you are working on
#sys.argv is a list in Python which contains the command-line arguments passed to the script
#With the str(sys.argv) fucntion you can see the actual arguments being passed

#import sys

#print("The name of our file is:", (sys.argv[0]))

import sys

print("The name of our file is:", (sys.argv[0]))
print("Number of arguments:", len(sys.argv))
print("The arguments are:", str(sys.argv))
