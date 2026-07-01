def findMax(nums):
    max = nums[0]
    for i in range(len(nums)):
        if nums[i] > max:
            max = nums[i]

    return max

nums = [10,34,25,8,76]
print("Maximum number: ",findMax(nums))