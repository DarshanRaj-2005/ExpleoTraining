with open("PythonBasics/DataFiles/sample2.txt","r") as myfile:
    lines = myfile.readlines()
    for i in lines:
        print(i,end="")

