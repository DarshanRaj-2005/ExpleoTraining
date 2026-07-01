# Prime Number using For Loop
# num = int(input("Enter a number:"))
# flag = 0
# for i in range(2,num):
#     if num % i == 0:
#         flag = 1

# if flag == 1:
#     print("It is not a prime number")
# else:
#     print("It is a prime Number")


#------------------------------------------


#Prime Number using For Loop between range
# num1 = int(input("Enter a number1:"))
# num2 = int(input("Enter a Number2:"))
# for i in range(num1,num2+1):
#     flag = 0
#     for j in range(2,i):
#         if i % j == 0:
#            flag = 1
#     if flag == 1:
#         print("It is not prime number")
#     else:
#         print("It is prime number")

#------------------------------------------


#Prime Number using While Loop
num = int(input("Enter the number:"))
flag = 0
i = 2
while i < num:
    if num % i == 0:
        flag = 1
    i += 1
if flag == 1:
    print("It is not a prime number")
else:
    print("It is a prime number")






