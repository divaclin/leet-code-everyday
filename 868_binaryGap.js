//https://leetcode.com/problems/binary-gap/submissions/
/**
 * @param {number} N
 * @return {number}
 */
var binaryGap = function(N) {
    const binary = N.toString(2)
    let max = 0
    
    for(let i=1,count=0;i<binary.length;i++){
       count++;
        if(binary[i]==='1'){
           max = count > max ? count : max
           count = 0
        }
    }
        
    return max
};
