from calculator.addition import add
from calculator.subtract import sub
from calculator.multiplication import mul
from calculator.division import div

a = int(input("Enter the a value:"))
b = int(input("Enter the b value:"))

print("Addition of a and b: ",add(a,b))
print("Subraction of a and b: ",sub(a,b))
print("Multiplication of a and b: ",mul(a,b))
print("Division of a and b: ",div(a,b))