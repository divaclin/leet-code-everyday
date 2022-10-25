//https://leetcode.com/problems/single-number/description/
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    return nums.reduce((prev,current)=>{
                return prev ^ current
            },-1) ^ -1
};
