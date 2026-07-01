class Demo:

    def method(self,a,b = None):

        if b is None:
            print(f"Single Argument : {a}")
        elif isinstance(a,int) and isinstance(b,int):
            print(f"Both are int {a} and {b}")
        elif isinstance(a,str) and isinstance(b,str):
            print(f"Both are string {a} and {b}")
        elif isinstance(a,float) and isinstance(b,float):
            print(f"Both are float {a} and {b}")
        else:
            print(f"Both are mixed type {a} and {b}")

obj = Demo()
obj.method(5,6)

