import traceback
try:
    num = int(input("Enter the value:"))
    if num < 0:
        raise ValueError("This is negative number")
except Exception as e:
    traceback.print_exc()
finally:
    print("Program over")