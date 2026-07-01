class TeamMember:
    def __init__(self,name,age):
        self.name = name
        self.age = age
    
    def display(self):
        print(f"Name: {self.name}\nAge: {self.age}")

class Worker:
    def __init__(self,pay,jobtitle):
        self.pay = pay
        self.jobtitle = jobtitle
    
    def display(self):
        print(f"Pay: {self.pay}\nJobTitle: {self.jobtitle}")

class Teamleader(TeamMember,Worker):
    def __init__(self,exp,name,age,pay,jobtitle):
        TeamMember.__init__(self,name,age)
        Worker.__init__(self,pay,jobtitle)
        self.exp = exp
    
    def details(self):
        print("-------Details---------")
        TeamMember.display(self)
        Worker.display(self)
        print("Experience:",self.exp)


obj = Teamleader(1,'Darshan',21,500000,'IT Manager')
obj.details()


