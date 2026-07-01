class myClass:

    #self is like this in python. 
    name = "Dharshan"
    def demo(self,name):
        print("My Name: ",self.name)
        return "This is demo method of myclass"
    

obj = myClass()

print("State: ",obj.name)
print("Behaviour: ",obj.demo("darshan"))
