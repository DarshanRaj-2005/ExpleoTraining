age = int(input("Enter age: "))

if age < 0:
    print("Invalid Age")
elif age < 13:
    print("Cartoon Club")
elif age <= 20:
    print("Teens Club")
else:
    print("Not Allowed")
