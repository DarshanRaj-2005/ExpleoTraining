text = 10,20,8.7,'Hello'
print(id(text))

text = (100,)+text[1:]

print(id(text))

#Both are tuple



a,b = 2+1,1+3
print(type(a))
print(a)

#To use split in tuple
word = 'darshan@gmail'
name,domain = word.split('@')
print(name)
print(domain)

quo,rem = divmod(15,2)
print(quo)
print(rem)





