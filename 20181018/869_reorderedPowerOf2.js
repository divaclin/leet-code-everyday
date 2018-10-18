//https://leetcode.com/problems/reordered-power-of-2/
/**
 * @param {number} N
 * @return {boolean}
 */
const permute = (str, l, r) =>{ 
   if (l == r){
      if(str[0]!=='0'){
        let num = parseInt(str.join(''))
        if((num & (num - 1)) == 0){
           return true
        }
      }
      return false
   }
   else{
       let result = false
       for (let i = l; i <= r; i++){ 
          [str[l],str[i]] = [str[i],str[l]]   
          result = permute(str, l+1, r); 
          [str[l],str[i]] = [str[i],str[l]]          
          if(result){
              break;
          }
       }
       return result
   } 
} 

var reorderedPowerOf2 = function(N) {
    const str = N.toString().split('')
    return permute(str,0,str.length-1)
};
