/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let i = 0
    if(nums.length === 0){
        return 0
    }
    for(let j=i+1;j<nums.length;j++){
        if(nums[i]!==nums[j]){
            nums[i+1] = nums[j]
            i++
        }
    }
    return i+1
};

// console.log(removeDuplicates([]))
// console.log(removeDuplicates([1]))
// console.log(removeDuplicates([1,1,2]))