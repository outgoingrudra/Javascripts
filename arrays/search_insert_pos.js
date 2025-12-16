//leetcode q-35

 const lowerBound = (arr , v)=>{
    l = 0
    r= arr.length - 1
    ans = -1
    while(l<=r)
    {
        m = (l+r)/2
        m = Math.floor(m)
        if(arr[m]>= v)
        {
           ans = m
           r= m - 1
        }
        else{
            l=  m+1
        }
    }
    return ans >=0 ? ans : arr.length
 }
var searchInsert = function(nums, target) {
       return lowerBound(nums,target) 
};