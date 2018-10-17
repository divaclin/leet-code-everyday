//https://leetcode.com/problems/sort-array-by-parity/description/
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
    const even = A.filter((item,key)=>{return item%2===0})    
    const odd  = A.filter((item,key)=>{return item%2===1})
    return [...even,...odd]
};
