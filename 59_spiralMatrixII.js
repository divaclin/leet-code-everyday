//https://leetcode.com/problems/spiral-matrix-ii/description/
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
        var checked = Array(n).fill(null).map(()=>Array(n).fill(false))
        var checkCount = 1
        var i=0,j=0
        var current = 0
        const dir = [{y:0,x:1},{y:1,x:0},{y:0,x:-1},{y:-1,x:0}]
        const next= [
            (checked,i,j,n)=>{ return j+1<n  && !checked[i][j+1] },        
            (checked,i,j,n)=>{ return i+1<n  && !checked[i+1][j] },
            (checked,i,j,n)=>{ return j-1>=0 && !checked[i][j-1] },
            (checked,i,j,n)=>{ return i-1>=0 && !checked[i-1][j] }
        ]
        
        while(checkCount<=n*n){
              checked[i][j] = checkCount
              checkCount++
              current = next[current](checked,i,j,n) ? current : (current+1)%4

              i+=dir[current].y
              j+=dir[current].x
        }
        return checked      
};
