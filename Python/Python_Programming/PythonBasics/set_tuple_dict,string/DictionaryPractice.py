dit = {1:0o1,"name":"darshan","list":[1,2,3],"tuple":(1,2,3)}
print(dit.get("name"))
print(dit)

#Keyword argument
mydict = dict(x=5,y=10)
print(type(mydict))
print(mydict)

#mapping
mydict2 = dict({'x':5,'y':10})
print(mydict2)

#using iterable
mydict3 = dict([('x',5),('y',10)])
print(mydict3)


#Creating nested dictionary

mydict4 = {'child1':{'name':'darshan','age':23},
           'child2':{'name':'vetri','age':57},
           'child3':{'name':'jaggu','age':69}
           }
print(mydict4.get('child3','name'))


mydict5 = {'name':'dharshan','brand':'BMW'}
mydict5["color"] = "black"
print(mydict5)


print(mydict5.keys())
print(mydict5.values())
print(mydict5.items())


print("The pop: ",mydict5.popitem())


for i in mydict5:
    print(i,mydict5[i])


print(mydict5.pop("name"))


print(mydict5.clear())

mydict6 = {1:'one',2:'two'}
newdict = {'two':2}
mydict6.update(newdict)
print(mydict6)


#dictionary comprehension
mydict7 = {x: x**2 for x in range(5)}
print(mydict7)

