def calculatePrime(num1,num2):
    if num1 > num2:
        print("Provide valid input")
    
    else:
        for i in range(num1,num2):
            flag = 0
            j = 2
            while(j < i):
                if(i % j == 0):
                    flag = 1
                    break
                j = j + 1
                
            if(flag == 0):
                print(i)
        


num1 = int(input("Enter the num1:"))
num2 = int(input("Enter the num2:"))
calculatePrime(num1,num2)