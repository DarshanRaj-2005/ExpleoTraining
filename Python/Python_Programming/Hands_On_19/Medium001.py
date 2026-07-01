oddres = 0
evenres = 0
def sumOfOddandEven(lower,upper):
    global oddres
    global evenres
    for i in range(lower,upper+1):
        if(i % 2 == 0):
            evenres += i
        else:
            oddres += i


lowerBound = int(input("Enter lower: "))
upperBound = int(input("Enter upper: "))
sumOfOddandEven(lowerBound,upperBound)
print("Total odd: ",oddres)
print("Total even: ",evenres)
print("The absolute Difference: ",abs(oddres-evenres))