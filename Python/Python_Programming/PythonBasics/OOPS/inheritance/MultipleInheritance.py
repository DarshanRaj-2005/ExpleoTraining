class TeamMember:
    def __init__(self,name,age):
        self.name = name
        self.age = age

class Worker:
    def __init__(self,pay,jobtitle):
        self.pay = pay
        self.jobtitle = jobtitle

class Teamleader(TeamMember,Worker):
    def __init__(self,name,age,pay,jobtitle,exp):
        TeamMember.__init__(self,name,age)
        Worker.__init__(self,pay,jobtitle)
        self.exp = exp
    
    def details(self):
        print("-------Details---------")
        print("Name:",self.name)
        print("Age:",self.age)
        print("Pay:",self.pay)
        print("Job Title:",self.jobtitle)
        print("Experience:",self.exp)

obj = Teamleader('Darshan',21,50000,'Tester',1)
obj.details()


