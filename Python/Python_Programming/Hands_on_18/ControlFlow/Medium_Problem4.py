total = 250
num = [42,46,115,47]
res =0

for i in range(len(num)):
    res += num[i]

if(res == total):
    print("well Behaved")
elif(res < total):
    print(" Baby lion is mischievous")
else:
    print("Wrong counted")

