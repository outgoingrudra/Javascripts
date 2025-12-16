// leetcode q-27 
var removeElement = function(nums, val) {
    let p = 0
    for(i = 0 ; i < nums.length ; i++ )
    {
        if(nums[i]== val)
           continue
        nums[p++]=  nums[i]
    }
    return p
    
};