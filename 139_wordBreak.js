//https://leetcode.com/problems/word-break/description/
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */

global.checked = []

const isExist = (s,dict) => {
    return dict.indexOf(s) > -1
}
const check   = (s,dict) => {
    if(s===''){
        return true
    }
    if(s in global.checked){
        return global.checked[s]
    }
    else{
        for(var i=0;i<s.length;i++){
            const left  = s.substr(0,i)
            const right = s.substr(i)
            if(check(left,dict)&&isExist(right,dict)){
               return global.checked[s] = true
            }
        } 
    }
    return global.checked[s] = false
}

var wordBreak = function(s, wordDict) {
    global.checked = []
    return check(s,wordDict)
};
