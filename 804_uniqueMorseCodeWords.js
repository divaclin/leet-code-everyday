//https://leetcode.com/problems/unique-morse-code-words/description/
/**
 * @param {string[]} words
 * @return {number}
 */

global.mapping = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]

var uniqueMorseRepresentations = function(words) {
    const s = new Set();
    const morse = words.map((item,key)=>{
                    var str = ''
                    for(var i=0;i<item.length;i++){
                        str+= global.mapping[item.charAt(i).charCodeAt(0)-'a'.charCodeAt(0)]
                    }
                    s.add(str)
                    return str
                  })
    return s.size
};
