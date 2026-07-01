class Details:

    def __init__(self):
        self._department = 'CSE' #protected varibale
        self._code = 2134


class Student(Details): # used inheritance here
    
    def __init__(self,name,age):
        super().__init__()
        self.name = name
        self.age = age
    
    def studentDetails(self):
        print("DETAILS")
        print("Name: ",self.name)
        print("Age: ",self.age)
        print("Department: ",self._department)
        print("Code: ",self._code)

obj = Student('darshan',21)
obj.studentDetails()

