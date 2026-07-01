import re

text = "Hi i am jaggu i am in training of python language"

result = re.search("jaggu",text)
print("The Result of Group:",result.group())

result = re.search("jaggu",text)
print("The Result of Start:",result.start())

result = re.search("jaggu",text)
print("The Result of End:",result.end())

result = re.search("jaggu",text)
print("The Result of Span:",result.span())

result = re.search("jaggu",text)
print("The Result of Prefix:",result.string[:result.start()])

result = re.search("jaggu",text)
print("The Result of Suffix:",result.string[result.end():])

result = re.search("jaggu",text)
print("The Result of re:",result.re)

result = re.search("jaggu",text)
print("The Result of string:",result.string)