//https://leetcode.com/problems/3sum/description/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const sorted = nums.sort((x,y)=>x-y)
    const len = sorted.length
    var result = []
    for(var i=0;i<=len-3;i++){
        var a=sorted[i],b,c,sum
        
        var j=i+1
        var k=len-1
        while(j<k){      
               
            b=sorted[j]
            c=sorted[k]
            sum = a+b+c
            if(sum===0){
               result.push([a,b,c])
               k--
               if(sorted[k]===sorted[k+1]){
                  while(k-1 > 0 && sorted[k]===sorted[k-1]){
                    k--
                 }
               }
               
               j++
               if(sorted[j]===sorted[j-1]){
                  while(j+1 < len && sorted[j]===sorted[j-1]){
                    j++ 
                  }
               }
            }
            else if(sum>0){
                k--
            }
            else{
                j++               
            }
            
        }
        while(i+1<len && sorted[i]===sorted[i+1]){
            i++
        }
    }   
    return result
};