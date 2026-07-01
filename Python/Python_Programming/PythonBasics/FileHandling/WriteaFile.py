with open("PythonBasics/DataFiles/sample.txt","w") as myfile:
    print(myfile.write("Hey I have started using files in Python\n"))
    
    #we can't write numbers in the file
    myfile.write(str(10))

