import re

pattern = r"\b[a-zA-Z0-9._]+@[a-z]+\.[a-z]{2,}\.[a-z]{2,}\b"
text = "Contact us using 2k22cse021@kiot.ac.in and 2k22cse054@kiot.ac.in to get help"

result = re.findall(pattern,text)
if(result):
    print("The Matching email:",result)
else:
    print("Match not found")

