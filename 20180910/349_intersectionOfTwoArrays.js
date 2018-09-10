//https://leetcode.com/problems/intersection-of-two-arrays/description/
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    const set1 = new Set(nums1)
    const set2 = new Set(nums2)
    const result = []
    set2.forEach((item)=>{
        if(set1.has(item)){
            result.push(item)
        }
    })
    return result
};
