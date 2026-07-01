class Vehicle:

    def __init__(self,name,color,price):
        self.name = name
        self.color = color
        self.price = price

    def show(self):
        print(f"Details:\nName:{self.name}\nColor:{self.color}\nPrice:{self.price}")
    
    def speed(self):
        print(f"The speed of {self.name} is 200km/hr")
    
    def gear(self):
        print(f"The current gear of {self.name} is 6th")

class Car(Vehicle):

    def show(self):
        print(f"Details:\nName:{self.name}\nColor:{self.color}\nPrice:{self.price}")

    def speed(self):
        print(f"The speed of {self.name} is 250km/hr")
    
    def gear(self):
        print(f"The current gear of {self.name} is 7th")

obj1 = Vehicle('MERCEDES','BLACK',50000)
obj1.show()
obj1.speed()
obj1.gear()

obj = Car('BMW','GREEN',50000)
obj.show()
obj.speed()
obj.gear()


print(Car.mro())