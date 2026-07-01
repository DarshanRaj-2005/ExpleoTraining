try:
    a = int(input("Enter the Num1:"))
    b = int(input("Enter the Num2:"))
    print("A / B: ",a / b)
except ZeroDivisionError:
    print("Can't Divide with Zero")
except Exception as e:
    print("Got a Error: ",e)
else:
    print("No Exception in program")
finally:
    print("This is finally message")
