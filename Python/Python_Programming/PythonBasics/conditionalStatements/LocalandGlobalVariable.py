# num = 2
# def demo():
#     num = num + 2
    
# demo()
# print(num)

#It says error because the num is global variable if we use num means we want to use that as global keyword

num = 2
def demo():
    global num
    num = num + 2
    
demo()
print(num)
