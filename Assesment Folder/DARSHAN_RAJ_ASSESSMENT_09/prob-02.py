class Person:

    def persondetails(self,name,age,email):
        self.name = name
        self.age = age
        self.email = email
    
    def display_info(self):
        print("Name: ",self.name)
        print("Age: ",self.age)
        print("Email: ",self.email)

class Trainee(Person):

    def traineedetails(self,batchid,marks,avg,numproject,numpublication):
        self.batchid = batchid
        self.marks = marks
        self.avg = avg
        self.numproject = numproject
        self.numpublication = numpublication
    

    def display_info(self):
        super().display_info()
        print("Batch id: ",self.batchid)
        print("Marks: ",self.marks)
        print("Average: ",self.avg)
        print("Projects: ",self.numproject)
        print("Publications: ",self.numpublication)

class SDETTrainee(Trainee):

    def sdetdetails(self,tool):
        self.tool = tool
    
    def compute_aggregate(self):
        aggregate = ((self.avg * 0.6) + (self.numproject * 5) + (self.numpublication * 3))
        return aggregate
    
    def display_info(self):
        super().display_info()
        print("Tool: ",self.tool)
        print("Aggregate Score: ",self.compute_aggregate())
    

trainee = []

for i in range(2):
    name = input("Enter the Name:")
    age = int(input("Enter the age:"))
    email = input("Enter the Email:")
    batchid = input("Enter the Batch Id:")
    marks = list(map(int,input("Enter the Enter the marks for 5 subject:").split(" ")))
    numpro = int(input("Enter the number of projects:"))
    numpub = int(input("Enter the number of publications:"))
    tool = input("Enter the tool used:")

    tot = 0
    for i in marks:
        tot += i
    avg = tot/len(marks)

    obj = SDETTrainee()
    obj.persondetails(name,age,email)
    obj.traineedetails(batchid,marks,avg,numpro,numpub)
    obj.sdetdetails(tool)
    
    trainee.append(obj)

top = trainee[0]

for i in trainee:
    if i.compute_aggregate() > top.compute_aggregate():
        top = i
top.display_info()