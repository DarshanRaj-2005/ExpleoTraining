def calculateSalary(salary,rating):
    if(rating < 1):
        print("Invalid input")
    
    elif(rating < 4):
        print((salary * 0.10)+ salary)
    
    elif(rating < 7):
        print((salary * 0.25)+salary)
    
    elif(rating < 10):
        print((salary * 0.30)+salary)


salary = int(input("Enter the Salary: "))
rating = float(input("Enter the rating: "))
calculateSalary(salary,rating)