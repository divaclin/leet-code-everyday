//https://leetcode.com/problems/circular-array-loop/description/
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var circularArrayLoop = function(nums) {
    if(nums.length>0){
        var i = 0 ,j =0
        var len = nums.length
        var check = nums[i]>0 ? 1 : -1   
        while(i<len){
            if(nums[i]===0){
                return i===0
            }
            else{
                if(nums[i]*check>0){
                   j = i
                   i = (i+nums[i]+len)%len
                   nums[j] = 0
                }
                else{
                   return false
                }
            }
        }
    }
    else{
        return false
    }
};
