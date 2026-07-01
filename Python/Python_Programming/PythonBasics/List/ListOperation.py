list1 = [1,2,3,4,5,6,7]

while(True):
    print("Choices")
    print("1. Append an Element")
    print("2. Insert an Element")
    print("3. Append an List")
    print("4. Modify the List")
    print("5. Delete element using the position")
    print("6. Delete element using the value")
    print("7. Sort the list using ascending order")
    print("8. sort the list using descending order")
    print("9. Display the list")
    print("10. Exit")

    choice = int(input("Enter the choice: "))

    if choice == 1:
        el1 = int(input("Enter the element: "))
        list1.append(el1)

    elif choice == 2:
        el2 = int(input("Enter the element:"))
        pos = int(input("Enter the position:"))
        list1.pop(pos)
        list1.insert(el2,pos)
    
    elif choice == 3:
        newList = list(map(int,input("Enter the values with comma seperated:").split(',')))
        list1.extend(newList)
        
    elif choice == 4:
        el3 = int(input("Enter the element:"))
        pos = int(input("Enter the position:"))
        list1.insert(pos,el2)

    elif choice == 5:
        pos = int(input("Enter the position:"))
        list1.pop(pos)
    
    elif choice == 6:
        el5 = int(input("Enter the element already exist in list:"))
        list1.remove(el5)

    elif choice == 7:
        list1.sort()

    elif choice == 8:
        list1.sort(reverse=True)

    elif choice == 9:
        print(list1)

    elif choice == 10:
         break
        




        
