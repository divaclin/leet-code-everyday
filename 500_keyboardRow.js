//https://leetcode.com/problems/keyboard-row/description/
/**
 * @param {string[]} words
 * @return {string[]}
 */
global.map = [
    ['q','w','e','r','t','y','u','i','o','p'],
    ['a','s','d','f','g','h','j','k','l'],
    ['z','x','c','v','b','n','m']
]
var findWords = function(words) {
    return words.filter((item)=>{
        var find = false
        var allin= true
        var mapIndex = 0
        for(let i=0;i<item.length;i++){
            if(i===0){
                while(!find){
                    if(global.map[mapIndex].indexOf(item[i].toLowerCase())!==-1){
                        find = true
                    }
                    else{
                        mapIndex++
                    }
                }
            }
            else{
                if(global.map[mapIndex].indexOf(item[i].toLowerCase())===-1){
                    allin = false
                }
            }
        }
        return allin && item
    })
};
