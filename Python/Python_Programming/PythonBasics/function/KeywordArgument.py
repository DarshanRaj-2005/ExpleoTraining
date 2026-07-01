def demo(name,msg):
    print(name + msg)

demo('darshan',msg = 'Hi Hello')
demo(msg="Hello",name='darshan')
demo(msg = 4, name = 6)

#we can't use non keyword argument after keyword argument
# demo(msg = 'hi', 'dharshan')