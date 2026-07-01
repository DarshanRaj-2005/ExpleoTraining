text = input("Enter the text:")

with open("PythonBasics/DataFiles/practice.txt","a") as myfile:
    lines = myfile.write(text)
    print(lines)

print("You have successfully created file and written the text")

with open("practice.txt","r") as myFile:
    lines = myFile.readlines()
    for i in lines:
        print(i,end="")
