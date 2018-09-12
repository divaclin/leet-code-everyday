//https://leetcode.com/problems/power-of-two/description/
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    var count = 0
    for(var mask=1,i=0;i<32;mask<<=1,i++){
        if(n&mask){
            count++
        }
    }
    return count===1 && n>0 
};
