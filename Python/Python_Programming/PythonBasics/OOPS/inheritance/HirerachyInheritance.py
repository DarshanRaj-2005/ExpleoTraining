class Value:
    x = int(input("Enter the Num1:"))
    y = int(input("Enter the Num2:"))

class Add(Value):

    def add(self):
        print("Addition:",self.x + self.y)

class Sub(Value):

    def sub(self):
        print("Subraction:",self.x - self.y)

obj1 = Add()
obj1.add()

obj2 = Sub()
obj2.sub()