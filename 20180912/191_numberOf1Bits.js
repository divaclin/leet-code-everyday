//https://leetcode.com/problems/number-of-1-bits/description/
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    var count = 0
    for(var mask=1,i=0;i<32;mask<<=1,i++){
        if(n&mask){
            count++
        }
    }
    return count
};
