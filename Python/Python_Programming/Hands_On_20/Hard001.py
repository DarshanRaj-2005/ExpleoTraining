text = input("Enter the text:")

lowcount = 0
highcount = 0
symbolcount = 0
for word in text:
    if word.islower():
        lowcount += 1
    elif word.isupper():
        highcount += 1
    else:
        symbolcount += 1

print("LowerCase Count: ",lowcount)
print("UpperCase Count: ",highcount)
print("Symbol Count: ",symbolcount)
