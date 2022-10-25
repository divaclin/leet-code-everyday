//https://leetcode.com/problems/judge-route-circle/description/
/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    const u = (moves.match(/U/g) || []).length    
    const d = (moves.match(/D/g) || []).length
    const l = (moves.match(/L/g) || []).length    
    const r = (moves.match(/R/g) || []).length
    return u===d && l===r
};
