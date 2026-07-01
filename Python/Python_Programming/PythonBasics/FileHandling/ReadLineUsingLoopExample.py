with open("PythonBasics/DataFiles/sample2.txt","r") as myfile:
        while True:
              line = myfile.readline()
              if not line:
                   break
              print(line)