from abc import ABC,abstractmethod

class Demo(ABC):

    @abstractmethod
    def sound(self):
        pass

class Dog(Demo):
    def sound(self):
        print("This is Dog Sound")

class Cat(Demo):
    def sound(self):
        print("This is Cat Sound")

d = Dog()
d.sound()
c = Cat()
c.sound()