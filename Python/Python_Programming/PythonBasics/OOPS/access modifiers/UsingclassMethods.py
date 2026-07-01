class Person:

    name = 'Darshan Raj'
    age = 22
    department = 'Computer Science'

    # def __init__(self,name,age,department):
    #     self.name = name
    #     self.age = age
    #     self.department = department


    #Used setter and getter method in class
    
    def setName(self,name):
        self.name = name
    
    def setAge(self,age):
        self.age = age
    
    def setDepartment(self,department):
        self.department = department
    
    def getName(self):
        return self.name
    
    def getAge(self):
        return self.age
    
    def getDepartment(self):
        return self.department
    
    @classmethod
    def details(cls):
        print("-------Class DETAILS---------")
        print("Name: ",cls.name)
        print("Age: ",cls.age)
        print("Department: ",cls.department)
        
obj = Person()
obj.setName('Darshan Raj')
obj.setAge(21)
obj.setDepartment('CSE')

Person.details()

print("------Object DETAILS------")
print("Name: ",obj.getName())
print("Age: ",obj.getAge())
print("Department: ",obj.getDepartment())
