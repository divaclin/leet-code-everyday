//https://leetcode.com/problems/reverse-words-in-a-string-iii/description/
/**
 * @param {string} s
 * @return {string}
 */

var reverseWords = function(s) {
    s = s.split(" ")
    s = s.map((item,key)=>{
        return item.split("").reverse().join("")  
    })
    return s.join(" ")
};
