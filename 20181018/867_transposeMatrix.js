//https://leetcode.com/problems/transpose-matrix/submissions/
/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var transpose = function(A) {
    const result = Array(A[0].length).fill(0).map((item,key)=>{return Array(A.length).fill(0)})
    for(let i=0;i<A.length;i++){
        for(let j=0;j<A[i].length;j++){
            result[j][i] = A[i][j]
        }
    }
    return result
};
