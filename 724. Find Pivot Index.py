class Solution:
    def pivotIndex(self, nums: List[int]) -> int:

        # If array is of size 1, regarless of the number at that position.
        # Index 0 is a valid pivot.
        if len(nums) == 1:
            return 0


        # Initialize sums
        leftSum, rightSum = 0, sum(nums[1:])

        for i in range(len(nums)):
            if leftSum == rightSum:
                return i

            if i == (len(nums))-1:
                if leftSum == 0:
                    return i
                else:
                    return -1

            leftSum += nums[i]
            rightSum -= nums[i+1]


        return -1
