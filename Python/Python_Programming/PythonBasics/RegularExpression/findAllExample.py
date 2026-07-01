import re

#It gives the value from anywhere. Give every matching value

text = "Hi i hamj Darshan, i am in training of python language"
result = re.findall("am",text)
print("Result = {}".format(result))
