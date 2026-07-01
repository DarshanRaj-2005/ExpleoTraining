#Implicit Type Conversion
n1 = 69
n2 = 34.56
n3 = n1 + n2
print(n3)
print(type(n3))


#Explicit Type Conversion
n4 = int(n2)
print(type(n4))


#Input functiion
name = input("Enter a name: ")
age = int(input("Enter a age: "))
print("Your name : ",name)
print("Your age : ",age)

#Fstring type to print the values
print(f"My name is {name} and my age is {age}")


#Using seperator and end
print("Apple","Orange","Mango",sep=" $ ",end=".\n")

print(1,2,3,4,5,sep=" # ",end=".")

