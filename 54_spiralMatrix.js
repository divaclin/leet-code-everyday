//https://leetcode.com/problems/spiral-matrix/description/
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
   if(matrix.length===0){
        return matrix
   }
   else{
        var m = matrix.length
        var n = matrix[0].length
        var checked = Array(m).fill(null).map(()=>Array(n).fill(false))
        var checkCount = 0
        var i=0,j=0
        var current = 0
        const dir = [{y:0,x:1},{y:1,x:0},{y:0,x:-1},{y:-1,x:0}]
        const next= [
            (checked,i,j,m,n)=>{ return j+1<n  && !checked[i][j+1] },        
            (checked,i,j,m,n)=>{ return i+1<m  && !checked[i+1][j] },
            (checked,i,j,m,n)=>{ return j-1>=0 && !checked[i][j-1] },
            (checked,i,j,m,n)=>{ return i-1>=0 && !checked[i-1][j] }
        ]
        var result = []
        
        while(checkCount<m*n){
              result.push(matrix[i][j])
              checked[i][j] = true
              checkCount++
              current = next[current](checked,i,j,m,n) ? current : (current+1)%4

              i+=dir[current].y
              j+=dir[current].x
        }
        return result  
   }
};
