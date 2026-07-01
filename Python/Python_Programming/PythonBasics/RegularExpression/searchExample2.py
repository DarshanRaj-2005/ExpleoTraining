import re

text = "Hi i am darshan, Welcome to learn python"
result = re.search('am',text)
print('Span = (start,end) :',result.span())