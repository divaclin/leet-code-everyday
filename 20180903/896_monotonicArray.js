//https://leetcode.com/problems/monotonic-array/description/
/**
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function(A) {
    return A.every((current,index,array)=>{
                return index===0 || (index>0 && current >= array[index-1])
           }) 
        || A.every((current,index,array)=>{
                return index===0 || (index>0 && current <= array[index-1])
           })
};
