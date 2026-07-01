import re

text = "Hi i am jaggu,i am here to learn python,i am a good programmer"
result = re.split('am',text)
print("Result = {}".format(result))