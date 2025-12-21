// leetcode q-2824

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var countPairs = function(nums, target) {
    ans = 0
    for(i =0 ; i < nums.length ;i++)
     {
        for(j=i+1;j< nums.length ;j++)
           if( nums[i]+nums[j] < target) ans++
     }
     return ans ;
};