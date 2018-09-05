//https://leetcode.com/problems/string-to-integer-atoi/description/
/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    try{
        var result = str.split(" ").filter(item=>item!='')[0].match(/^([0-9]+|-[0-9]+|\+[0-9]+)/)
        if(result!==null){
           result = parseInt(result[0])
           if(result>2147483647||result<-2147483648){
               return result>0 ? 2147483647 : -2147483648
           }
           return result
        }
        return 0
    }
    catch(e){
        return 0
    }
};
