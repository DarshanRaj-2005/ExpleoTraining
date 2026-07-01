oddRes = 0
evenRes = 0

def sumOfNums(nums):
    global oddRes
    global evenRes
    for i in range(len(nums)):
        if(i % 2 == 0):
            oddRes += nums[i]
        else:
            evenRes += nums[i]

    print("Sum of odd: ",oddRes)
    print("Sum of Even: ",evenRes)

nums = [2,3,4,5,6]
sumOfNums(nums)

