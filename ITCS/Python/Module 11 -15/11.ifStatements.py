x = 1
y = 3
if x > y: #If this was true then the code below would run. Because it is false the code ends so nothing will print
  print("X is greater than Y")

#x = 1
#y = 3
#if x > y:
  #print("X is greater than Y")
#else:
  #print("Y is greater than X")

x = 3
y = 3
if x > y:
  print("X is greater than Y")
elif x == y:
  print("X and Y are equal")
else:
  print("Y is greater than X")

#You can have as many elif as you want

#Another way to write it is

x = 20
y = 10
if x > y: print("x is greater than y")

a = 8
b = 2
print("a is greater") if a > b else print ("b wins")

#The if-elif-else chain is powerful, but it's only appropriate to use when you just need one test to pass. As soon as python finds one test that passes it skips the rest of the tests.
# In the case of wanting multiple true values it is better to use the if statement. Imagine a pizza, if you use the elif it will look for the first topping thats true and not put anything else on. If you use the if statement it will look for as many toppings as you want

requestedOptions = ['leather', 'sun roof']

if 'leather' in requestedOptions:
  print("Nice leather interior")
if 'alarm' in requestedOptions:
  print("Keep the bad guys away")
if 'sun roof' in requestedOptions:
  print("Letting the sun in")

print("\nFinished making your car!")#This will print reagrdless as it is not a conditional statement#

#Task

a = "100 degrees"
b = "120 degrees"

#if a < b:
  #print("It's only 100 degrees")

#if a > b:
  #print("It's only 100 degrees")
#else:
  #print("It's 120 degrees!")

temp = 80

if temp >100:
  print("It's really hto out!")
elif temp >= 90:
  print("Not super hot, but very warm")
elif temp >= 80:
  print("Nice temp, hope the humidity is okay")
elif temp >= 70:
  print("Just fine")
else:
  print("You get it by now right?S")
