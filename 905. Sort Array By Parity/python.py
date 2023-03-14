nums = [3,1,2,4]
#nums = [0]

def sortArrayByParity(nums):
    for i in range(0, len(nums)):
        if nums[i] % 2 == 0:
            a = nums[i]
            nums.pop(i)
            nums.insert(0, a)
            i += 1
    return nums


print(sortArrayByParity(nums))