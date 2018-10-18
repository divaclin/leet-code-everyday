//https://leetcode.com/problems/fair-candy-swap/
/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var fairCandySwap = function(A, B) {
    const Al = A.length
    const Bl = B.length
    const sumA  = A.reduce((prev,current)=>{ return prev+current },0)
    const sumB  = B.reduce((prev,current)=>{ return prev+current },0)
    const total = (sumA+sumB)/2
    
    for(let i=0;i<Al;i++){
        for(let j=0;j<Bl;j++){
            if(sumA-A[i]+B[j]===total){
                return [A[i],B[j]]   
            }              
        }
    }
         
};
