#concatination in python
fname=input("Enter the first name")
sname=input("Enter the second name")
fullname=fname+sname
pass1=input("set password")
print(fullname)
pwd=input("enter the password to log on")
if pwd==pass1:
    print(fullname+" is logged")
else:
    print("password is incorrect")