//https://leetcode.com/problems/power-of-three/description/
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    return Number.isInteger(Math.log10(n)/Math.log10(3))
};
