num = input("Enter the number:")
MyDict = {1:'One',2:'Two',3:'Three',4:'Four',5:'Five',6:'Six',7:'Seven',8:'Eight',9:'Nine',0:'Zero'}

def convertingIntoWord(num):
    nums = num.split()
    for i in nums:
        n = int(i)
        for j in MyDict:
            if n == j:
                print(MyDict[j])


convertingIntoWord(num)
