//https://leetcode.com/problems/spiral-matrix-iii/description/
/**
 * @param {number} R
 * @param {number} C
 * @param {number} r0
 * @param {number} c0
 * @return {number[][]}
 */
var spiralMatrixIII = function(R, C, r0, c0) {
    var checked = Array(R).fill(null).map(()=>Array(C).fill(false))
    var checkCount = 0
    
    var move = {
        current:0,
        i:r0,
        j:c0
    }
    
    const dir = [{y:0,x:1},{y:1,x:0},{y:0,x:-1},{y:-1,x:0}]
    const next= [
        (c0,r0,move,maxTraversal,hasTraversed)=>{
             if(!(move.i===r0&&move.j===c0)){
                 hasTraversed.x++
             }
             if(hasTraversed.x>=maxTraversal.x){
                hasTraversed.x = 0
                move.current = (move.current+1)%4
                maxTraversal.x++
             }
        },
        (c0,r0,move,maxTraversal,hasTraversed)=>{
             hasTraversed.y++
             if(hasTraversed.y>=maxTraversal.y){
                hasTraversed.y = 0
                move.current = (move.current+1)%4
                maxTraversal.y++ 
             }
        }
    ]
    
    var maxTraversal = {x:1,y:1}
    var hasTraversed = {x:0,y:0}
    var result = []
    
    while(checkCount<R*C){
          if((0<=move.i&&move.i<R) && (0<=move.j&&move.j<C)){
             result.push([move.i,move.j])
             checked[move.i][move.j] = true
             checkCount++
          }
          next[move.current%2](c0,r0,move,maxTraversal,hasTraversed)  
        
          move.i+=dir[move.current].y
          move.j+=dir[move.current].x
    }
    return result  
};
