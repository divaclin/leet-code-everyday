//https://leetcode.com/problems/nth-digit/description/
/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function(n) {
    for(var i=1,j=10,k=1;i<1<<31-1;i++){
        var len
        if(i/j>=1){
           j*=10
           k++
        }
        len = k
        if(n>len){
            n-=len
        }
        else{
            return parseInt(i.toString().charAt(n-1))    
        }
    }
};
