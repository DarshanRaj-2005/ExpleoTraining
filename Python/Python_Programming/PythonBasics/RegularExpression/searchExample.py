import re
text = "Hi i am darshan raj, Welcome"
res = re.search("^Hi.*Welcome$",text)
if(res):
    print("There is a Match")
else:
    print("There is no Match")