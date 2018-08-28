//https://leetcode.com/problems/single-number-iii/description/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    nums = nums.sort((a,b)=>{return a-b})
    for(var i=0;i<nums.length-1||nums.length>2;i++){
       if(nums[i]-nums[i+1]===0){
          nums.splice(i,2)
          i-=2  
       }
    }
    return nums
};
