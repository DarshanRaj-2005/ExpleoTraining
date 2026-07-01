#creating set 
myset = {1,2,3,4,4,2}
print(myset)

#creating set using another method using set function
myset1 = set([2,2,4,3,2,1])
print(myset1)

#adding single element
myset.add(6)
print(myset)

#adding multiple element
myset.update([9,8])
print(myset)

#remove a element and does not give error if element not present
myset.discard(2)
print(myset)
myset.discard(2)

#remove a elemet but give error if element not present
# myset.remove(2)


#remove a random element from the set
myset.pop()
print(myset)
myset.pop()
print(myset)
myset.pop()
print(myset)


a = {1,2,3}
b = {3,4,5}
print("Symmetric Difference: ",a ^ b)
print("Difference a- b: ",a-b)
print("Union: ",a | b)
print("Intersection: ",a&b)