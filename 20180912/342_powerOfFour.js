//https://leetcode.com/problems/power-of-four/description/
/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function(num) {
    var count = 0
    for(var mask=1,i=0;i<=15&&mask<=num;mask<<=2,i++){
        if(num===mask){
            count++
        }
    }
    return count===1 && num>0   
};
