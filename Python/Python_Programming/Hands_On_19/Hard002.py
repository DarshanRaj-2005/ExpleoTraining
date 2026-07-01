def calculator(text):
    value = text[0].lower()
    values = text.split()
    if value == "a":
        return int(values[1]) + int(values[3])
    elif value == "m":
        return int(values[1]) * int(values[3])
    elif value == "s":
        return abs(int(values[1]) - int(values[3]))


text = input("Enter the value(Add 5 and 8):")
print(calculator(text))


