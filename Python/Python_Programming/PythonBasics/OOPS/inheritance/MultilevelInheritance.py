class Student:
    def stuDetail(self):
        self.name = input("Enter the Name:")
        self.age = input("Enter the Age:")
    
class Marks(Student):
    def mark(self):
        self.stuDetail()
        self.sub1 = int(input("Enter the Sub 1 mark:"))
        self.sub2 = int(input("Enter the Sub 2 mark:"))
        self.sub3 = int(input("Enter the Sub 3 mark:"))
    
    def calculateTotal(self):
        return self.sub1 + self.sub2 + self.sub3
    
class Department(Marks):

    def studentDetails(self):
        self.mark()
        self.depName = input("Enter the Department name:")
        self.depCode = input("Enter the Department Code:")

    def printDetail(self):
        print("-----Student Details-----")
        print("Name:",self.name)
        print("Age:",self.age)
        print("Mark in sub1:",self.sub1)
        print("Mark in sub2:",self.sub2)
        print("Mark in sub3:",self.sub3)
        print("Total:",self.calculateTotal())
        print("Department:",self.depName)
        print("Code:",self.depCode)


obj = Department()
obj.studentDetails()
obj.printDetail()


    

