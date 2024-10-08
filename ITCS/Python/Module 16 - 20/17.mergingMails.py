#When we want to send the same invitation to many people, the body of the mail does not change.
  #Only the name (and maybe address) needs to be changed
  #Mail merge is the process of doing this.

# x = open("hello.txt", "w")
# y = x.read()
#   print(y)
# x.close()

#Same thing as above
#with open("hello.txt", "w") as file:
#   file.write("Hey there!")

# x = open("hello.txt", "r")
# print(x.read())

#Lets say we have a party coming up and we want to send out the same invites to our friends, but the body of the mail does not change.
  #Only the name (and maybe address) needs to be changed

#Instead of writing each mail seperately, we have a template for the body of the mail and a list of names that we merge together to form all the mails.

#Lets first create 2 files we will be working with:
  #Names.txt - will have a new line for each person
  #Messages.txt - will contain the body message for the email

with open("17names.txt", "r") as n_file:
  with open("17messages.txt", "r") as m_file:

    body = m_file.read()
    for name in n_file:

      mail = "Hello " + name + body
      with open(name.strip()+ ".txt", "w") as m_file:

        m_file.write(mail)

  
  