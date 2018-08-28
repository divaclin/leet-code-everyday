//https://leetcode.com/problems/total-hamming-distance/description/
/**
 * @param {number[]} nums
 * @return {number}
 */

var totalHammingDistance = function(nums) {
    var total = 0
    for(var i=0;i<32;i++){
        var ones  = 0
        var zeros = 0
        for(var j=0;j<nums.length;j++){
            if(nums[j]&1===1){
               ones++
            }
            else{
               zeros++
            }
            nums[j]>>>=1
        }
        total+=ones*zeros
    }
    return total
};
