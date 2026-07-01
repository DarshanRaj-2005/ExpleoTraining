def circle(radius):
    print("Circle",(radius * radius) * 3.14)

def rec(length,breadth):
    print("Rectangle",length * breadth)

def square(side):
    print("Square",side ** 2)

while True:
    print ("Enter the choice")
    print ("1. Circle")
    print ("2. Rectangle")
    print ("3. Square")
    print ("4. Exit")

    choice = int(input("Enter your Choice: "))

    if(choice == 1):
        rad = int(input("Enter the radius: "))
        circle(rad)
    
    elif(choice == 2):
        len = int(input("Enter the length: "))
        brd = int(input("Enter the breadth: "))
        rec(len,brd)
    
    elif(choice == 3):
        side = int(input("Enter the side: "))
        square(side)

    elif(choice ==4):
        break

    else:
        print("Invalid Choice")