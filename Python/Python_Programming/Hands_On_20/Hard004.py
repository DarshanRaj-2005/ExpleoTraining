text = input("Enter the text:")
newtext = text.split()
min = len(newtext[0])

for i in newtext:
    if len(i) < min:
        print(i)


