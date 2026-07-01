class myClass:

    __name = None
    __age = None

    def setName(self,name):
        self.name = name

    def setAge(self,age):
        self.age = age
    
    def getName(self):
        return self.name
    
    def getAge(self):
        return self.age

obj = myClass()
obj.setName("Darshan")
obj.setAge(21)
print(obj.getName())
print(obj.getAge())

    

    
    

