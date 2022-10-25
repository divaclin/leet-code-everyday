//https://leetcode.com/problems/flipping-an-image/description/
/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function(A) {
    return A.map((item,key)=>{
        return item.reverse()
                   .map((item2,key2)=>{
                        return (item2+1)%2
                    })
    })
};
