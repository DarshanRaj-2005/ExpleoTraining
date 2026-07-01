with open("PythonBasics/DataFiles/sample2.txt","r") as myfile:
    line  = myfile.readlines()

    for i in line:
        j = i.splitlines()
        print(j)