//https://leetcode.com/problems/length-of-last-word/description/
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
   const split = s.split(" ").filter(item=>item)
   return !split[0]?0:split[split.length-1].length
};
