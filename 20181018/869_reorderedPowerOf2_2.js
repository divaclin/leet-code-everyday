//https://leetcode.com/problems/reordered-power-of-2/
/**
 * @param {number} N
 * @return {boolean}
 */

global.map = []
var reorderedPowerOf2 = function(N) {
    let mapLength = global.map.length
    if(mapLength===0){
       for(let i=1;i<=1000000000;i<<=1,mapLength++){
           global.map.push(i.toString().split('').sort().join(''))
       }
    }
    const split = N.toString().split('').sort()
    let result = false
    for(let i=0;i<mapLength;i++){
        if(global.map[i].length===split.length){
           result = split.every((item,index)=>{return item-global.map[i][index]===0})
        }
        if(result){
           break;   
        }
    }
    return result    
};
