text = input("Enter the text:")

newText = text.split()

for word in newText:
    if word.isalpha() or word.isnumeric:
        pass
    else:
        print(word)
    