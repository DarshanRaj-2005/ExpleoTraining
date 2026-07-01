word = "HiWelco7e907"

numCount = 0
alphaCount = 0
symCount = 0

for i in word:
    if i.isnumeric():
        numCount += 1;
    elif i.isalpha():
        alphaCount += 1;
    else:
        symCount += 1;
print("Number count: ",numCount)
print("Alphabetic Count: ",alphaCount)
print("Symbol Count: ",symCount)