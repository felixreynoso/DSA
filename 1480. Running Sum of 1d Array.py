class Solution:
    def runningSum(self, nums: List[int]) -> List[int]:

        runningSum = [nums[0]]

        for nbr in nums[1:]:

            runningSum.append(runningSum[-1] + nbr)

        return runningSum
        
