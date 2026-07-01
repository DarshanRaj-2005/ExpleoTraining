class Myclass:

    def __init__(self,name,age):
        self.name = name   #This is public variable
        self.__age = age   #This is private variable
    
obj = Myclass('Darshan',21)
print(obj.name)
print(obj.age) # i will get error because can't access directly