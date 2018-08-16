//https://leetcode.com/problems/jewels-and-stones/description/
/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */

const str2map = (str) => {
    var result= {} 
    for(let char of str){
        result[char] = !(char in result)
                       ? 1
                       : result[char]+1
    }
    return result
}

var numJewelsInStones = function(J, S) {
    var mapList = str2map(S)
    var total   = 0
    for(let char of J){
        total += !(char in mapList) ? 0 : mapList[char]
    }
    return total
};
