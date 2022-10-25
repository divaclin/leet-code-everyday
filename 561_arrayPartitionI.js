//https://leetcode.com/problems/array-partition-i/description/
/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    nums = nums.sort((a,b)=>{return a-b})
    var sum = 0
    for(var i=0,len=nums.length;i<len;i+=2){
        sum+=Math.min(nums[i],nums[i+1])
    }
    return sum
};
