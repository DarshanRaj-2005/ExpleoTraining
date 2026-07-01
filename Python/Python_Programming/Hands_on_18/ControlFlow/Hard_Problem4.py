income = int(input("Enter income: "))

if income <= 250000:
    print("You are exempted from tax")

elif income <= 500000:
    tax = (income - 250000) * 10 / 100
    print("Tax amount is", int(tax))

elif income <= 1200000:
    tax = 250000 * 10 / 100
    tax = tax + (income - 500000) * 20 / 100
    print(int(tax))

else:
    tax = 250000 * 10 / 100
    tax = tax + 700000 * 20 / 100
    tax = tax + (income - 1200000) * 30 / 100
    print(int(tax))
