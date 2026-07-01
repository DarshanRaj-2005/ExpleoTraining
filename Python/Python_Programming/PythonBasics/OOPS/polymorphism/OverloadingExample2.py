class Demo:

    def __init__(self,a,b):
        self.real = a
        self.img = b
    
    def __add__(self,sec):
        a = self.real + sec.real
        b = self.img + sec.img
        return Demo(a,b)
    
    def __str__(self):
        return str(self.real) +" + "+str(self.img)+"i"

obj = Demo(5,6)
obj2 = Demo(6,5)

print(obj + obj2)
