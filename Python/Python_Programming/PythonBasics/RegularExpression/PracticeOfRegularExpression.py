import re

text = "Hello Chief123! My email is chief_007@gmail.com and my phone number is 9876543210. I bought a laptop for $750.50 on 03-06-2026. Visit https://python.org now! #Python @Developer"


#startswith
res1 = re.findall(r"\AHello",text)
print("The Result of A: ",res1)

#endswith
res2 = re.findall(r"Developer\Z",text)
print("The Result of Z",res2)


res3 = re.findall(r"\blap",text)
print("The Result of b:",res3)

res4 = re.findall(r"top\b",text)
print("The Result of b",res4)

res5 = re.findall(r"/Blap",text)
print("The Result of B:",res5)

res6 = re.findall(r"top/B",text)
print("The Result of B:",res6)

#space 
res7 = re.findall(r"\s",text)
print("The result of s:",res7)

#not space
res8 = re.findall(r"\S",text)
print("The result of S:",res8)

#digit
res9 = re.findall(r"\d",text)
print("The result of d:",res9)

#non-digit
res10 = re.findall(r"\D",text)
print("The result of D:",res10)

#a-z,A-Z,0-9,_
res11 = re.findall(r"\w",text)
print("The result of w:",res11)

#not a-z,A-Z,0-9,_
res12 = re.findall(r"\W",text)
print("The Result of W:",res12)