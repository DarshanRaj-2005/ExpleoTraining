def salaryCalculate(salary,hike):
    return  salary + (salary / hike) * 100

salary = int(input("Enter the salary: "))
hikes = int(input("Enter the hike: "))

print("Total Salary: ",salaryCalculate(salary,hikes))