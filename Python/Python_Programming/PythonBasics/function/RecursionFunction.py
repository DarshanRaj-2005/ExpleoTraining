def recursion(num):
    if num > 0:
        return num * recursion(num-1)
    else:
        return 1

res = recursion(5)
print(res)