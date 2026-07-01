text = "/*Jon is @developer & musician!!"
characters = "!@#$%^&*()\_/"

for i in characters:
    text = text.replace(i,"#")
    
print(text)