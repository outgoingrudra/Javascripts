/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(arr, target) {

    let map = new Map()
        let ans = [-1,-1]
        
        for(let i =0;i<arr.length;i++)
        {
            let diff = target - arr[i]
            if(map.has(diff))
            {
                ans[0]=i
                ans[1] = map.get(diff)
                return ans
            }
            map.set(arr[i],i)
        }
        return ans
    
};