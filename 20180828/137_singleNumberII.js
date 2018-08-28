//https://leetcode.com/problems/single-number-ii/description/
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    var result = 0
    var len    = nums.length
    for(var i=0,mask=1;i<32;i++,mask<<=1){
        var showup = 0
        for(var j=0;j<len;j++){
            if(nums[j]&mask){
               showup++
            }
        }
        if(showup%3){
           result+=mask
        }
    }
    return result
};
