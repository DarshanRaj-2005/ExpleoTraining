greet = "HiWelcome"
greets = "hello"
greeting = "hello, World"
print("The length of greet: ",len(greet))
print("Character in 0: ",greet[0])
print("Character in -5: ",greet[-5])
print("Before Deleting String: ",greet)

# del greet
# print("After Deleting String: ",greet)


# traversing in string using for loop
for i in greet:
    print(i)

#traversing in string using while loop
i = 0
while(i < len(greet)):
    print(greet[i])
    i = i + 1

#Slicing of String
print(greet[0:9])
print(greet[-7:-1])
print(greet[0:])
print(greet[:9])
print(greet[-3:-1])
print("Slicing with Greater number as first: ",greet[-1:-3]) 
print(greet[0:9:2])
print(greet[-8:-1:2])
print(greet[-1:-10:-1])
print(greet * 2)
print(greet + greets)


#It is like contains
if "Hi" in greet:
    print("It have hi")
else:
    print("It don't have hi")

#creating a new string
newGreet = 'j' + greeting[7:]
print(newGreet)

newGre = 'j' + greeting[-5:]
print(newGre)


#upper,lower and find and split

word = "welcomeoo"
words = "Hi Hello welcome"
print(word.find('W'))
print(word.find('o'))
print(word.find('Wo'))
print(word.find('o'))
print(word.upper())
print(word.lower())
print(word.find('o',5))
print(words.split())

#count and capitalize

print(word.count('o'))
print(word.capitalize())

#isalnum and isalpha and isnumeric

print("is alpha and num: ", word.isalnum())
print("Is alpha: ", word.isalpha())
print("Is numeric: ",word.isnumeric())

#replace

print(word.replace("oo","hi"))

#starts-with and ends-with

print("Startswith: ",word.startswith("w"))
print("Ends with: ",word.endswith("o"))


#palindrome

value = "DAD"
if value == value[::-1]:
    print("It is palindrome")
else:
    print("It is not a palindrome")
    

#Palindrome using equal method

value = "DAD"
if value.__eq__(value[::-1]):
    print("It is palindrome")
else:
    print("It is not a palindrome")



