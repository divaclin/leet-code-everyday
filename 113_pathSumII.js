//https://leetcode.com/problems/path-sum-ii/description/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
const path = (node,current,sum,step=null) => {
    if(node){
        if(!node.left&&!node.right && node.val+current==sum){
            global.result.push(JSON.parse(`[${step+node.val}]`))
        }
        else{
            path(node.left ,current+node.val,sum,step+node.val+',')        
            path(node.right,current+node.val,sum,step+node.val+',')   
        }
    }
}

global.result = []
var pathSum = function(root, sum) {
    global.result = []
    path(root,0,sum)
    return global.result
};
