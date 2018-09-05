//https://leetcode.com/problems/reverse-integer/description/
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var result = 0
    if(x<0){
        result = -parseInt((-x).toString().split("").reverse().join(""))
        if(result<-2147483648){
           result=0
        }
    }
    else{
        result = parseInt(x.toString().split("").reverse().join(""))
        if(result>2147483647){
           result=0
        }
    }
    return result
};
