class myclass:
    name = None
    def __init__(self,name):
        self.name = name
    
    def greet(self):
        print("Hi",self.name, "Welcome to learn python")

obj = myclass('Darshan')
obj.greet()
