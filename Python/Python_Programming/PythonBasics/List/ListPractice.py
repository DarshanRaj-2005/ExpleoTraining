names = list()
print("The Empty List: ",names)
print(type(names))

names = ['max','lewis','kimi']
print("List after values: ",names)

name = "charles"
names = list([name])
print("list after adding one more value: ",names)

# del names[2]
# print("After deleting 2nd index value: ",names)

# del names
# print("After deleting entire list: ",names)

for i in range(len(names)):
    print(names[i])