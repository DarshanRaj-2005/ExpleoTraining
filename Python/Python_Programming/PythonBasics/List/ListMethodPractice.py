list1 = [1,2,7,4,9,6,7]
list2 = [7,8,9,2,3,1]
list3 = ['max','charles','kimi']

print("List before sort: ",list1)
list1.sort()
print("Sorted the list in ascending order: ",list1)
print("List before sort: ",list2)
list2.sort(reverse= True)
print("Sorted the list in the descending order: ",list2)
print("List before sort: ",list3)
list3.sort()
print("Sorted list in ascending order: ",list3)

#using sorted to create a nedw list for sorted

list4 = sorted(list1)
print(list4)

#min, max and sum in list

print("max: ",max(list1))
print("min: ",min(list1))
print("sum: ",sum(list1))

#copy of the list

l1 = list1.copy()
print("After copying the list1: ",l1)
l1.append(10)
print("L1 List: ",l1)
print("List1 list: ",list1)
