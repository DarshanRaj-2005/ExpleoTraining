import re

text = "I am walking and i am talking"
pattern = r"\b\w+ing\b"

result = re.search(pattern,text)
if(result):
    print("The Result of the pattern:",result.group())
else:
    print("The pattern not found")