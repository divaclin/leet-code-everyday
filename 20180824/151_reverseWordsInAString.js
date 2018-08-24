//https://leetcode.com/problems/reverse-words-in-a-string/description/
/**
 * @param {string} str
 * @returns {string}
 */
var reverseWords = function(str) {
    return str.split(' ').filter(item=>item).reverse().join(' ')              
};
