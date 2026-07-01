name = input("Enter customer name: ")
items = int(input("Enter number of items: "))

if items < 10:
    cost = items * 12
elif items < 100:
    cost = items * 10
else:
    cost = items * 7

print(name, cost)
