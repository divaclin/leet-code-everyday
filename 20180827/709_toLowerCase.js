//https://leetcode.com/problems/to-lower-case/description/
/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
    const diff = 'a'.charCodeAt(0) - 'A'.charCodeAt(0)
    return str.replace(/[A-Z]/g,(item)=>String.fromCharCode(item.charCodeAt(0)+diff))
};
