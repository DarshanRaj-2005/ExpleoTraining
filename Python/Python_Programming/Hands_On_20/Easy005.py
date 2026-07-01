text = input("Enter the text:")
small =""
big = ""
for word in text:
    if word.islower():
        small += word
    else:
        big += word
    
print(small + big)