import re

text = "hi welcome to learn java, java is a programming language that many mnc use and java is the programmer friendly language"
result = re.sub('java','python',text)
print("Result : ",result)