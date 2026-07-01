class BaseError(Exception):
    pass
class SmallValue(BaseError):
    pass
class LargeValue(BaseError):
    pass
num = int(input("Enter the number:"))
res = 10
try :
    if(num == res):
        print("You won")
    elif(num < res):
        raise SmallValue("Value is too small")
    elif(num > res):
        raise LargeValue("Value is too Big")
except Exception as e:
    print(e)
finally:
    print("Program Executed successfully")

