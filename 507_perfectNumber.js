//https://leetcode.com/problems/perfect-number/description/
/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
    var checkLength = parseInt(Math.sqrt(num))
    var total = 1
    for(var i=2;i<=checkLength;i++){
        if(num%i==0){
           total+=i+num/i
        }   
    }
    return total===num && num!==1
};
