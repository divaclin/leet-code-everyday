//https://leetcode.com/problems/total-hamming-distance/description/
/**
 * @param {number[]} nums
 * @return {number}
 */

var totalHammingDistance = function(nums) {
    var total = 0
    var totalLength = nums.length
    for(var i=0,ones=0,mask=1;i<32;i++,ones=0,mask<<=1){
      for(var j=0;j<totalLength;j++){
        if(nums[j]&mask){
            ones++
        }
      }
      total+=ones*(totalLength-ones)
    }
    return total
};
