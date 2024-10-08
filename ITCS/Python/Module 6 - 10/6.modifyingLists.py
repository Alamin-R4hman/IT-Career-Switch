#We can use indexing to change items within the list, by setting an index number equal to a different value

employees =["Sara", "Mark", "Jake", "Hank", "Jo"]
employees[0] = "Kat"
print(employees)

#Operators can be used to modify lists

employees =["Sara", "Mark", "Jake", "Hank", "Jo"]
employees = employees + ["Jim"]
print(employees)

# + can be used to concarenate to or more lsits
employeeTitle = ["manager", "worker 1", "worker 2", "worker 3"]
print(employees + employeeTitle)

#Adding in the middle or specific position
employees =["Sara", "Mark", "Jake", "Hank", "Jo"]
employees.insert(3, "Howy")
print(employees)

#You can also delete a item using 'del'
employees =["Sara", "Mark", "Jake", "Hank", "Jo"]
del employees[2]
print(employees)

#Another way to delete is by specifiying if you do not know the position example
employees =["Sara", "Mark", "Jake", "Hank", "Jo"]
employees.remove('Sara')
print(employees)

#Looping through items
employees =["Sara", "Mark", "Jake", "Hank", "Jo"]
for emp in employees:
  print(emp)

#To determine if a specific item is present in a list use the 'in' keyword
employees =["Sara", "Mark", "Jake", "Hank", "Jo"]
if "Jo" in employees:
  print("Yes, Jo is here today")
#Won't work as intended
employees =["Sara", "Mark", "Jake", "Hank", "Jo"]
if "Alamin" in employees:
  print("Yes, Jo is here today")

#Te determine how many items a list has, use the len method
employees =["Sara", "Mark", "Jake", "Hank", "Jo"]
print(len(employees))