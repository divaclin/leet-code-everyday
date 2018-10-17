//https://leetcode.com/problems/uncommon-words-from-two-sentences/description/
/**
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 */
const setCount = (result,array) => {
    for(let i=0;i<array.length;i++){
        if(array[i] in result){
            result[array[i]]+=1
        }
        else{
            result[array[i]]=1 
        }
    }
}
var uncommonFromSentences = function(A, B) {
    const splitA = A.split(' ')
    const splitB = B.split(' ')
    const count = {}
    const result= []
    
    setCount(count,splitA)
    setCount(count,splitB)
    
    for(key in count){
        if(count[key]===1){
            result.push(key)   
        }
    }
    
    return result
};
