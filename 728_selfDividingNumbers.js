//https://leetcode.com/problems/self-dividing-numbers/description/
/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    const result = []
    for(i=left;i<=right;i++){
        var str  = i.toString()
        var find = false
        if(str.indexOf('0')===-1){
           var check = str.split('')
           find  = check.reduce((prev,current)=>{
                     return prev &= i%current === 0
                   },true)
        }
        if(find){
            result.push(i)
        }
    }
    return result
};
